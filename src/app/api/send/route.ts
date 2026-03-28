import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, description } = await request.json();

    if (!name || !email || !description) {
      return NextResponse.json({ error: 'Faltan campos obligatorios.' }, { status: 400 });
    }

    let transporter;
    let isTest = false;

    // Si el usuario configuró el archivo .env, lo usamos. Si NO, creamos un correo genérico de prueba "Ethereal" automáticamente.
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const port = Number(process.env.SMTP_PORT) || 465;
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: port,
        secure: port === 465, // true para 465 (SSL), false para 587 (TLS)
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS, // Contraseña de aplicación
        },
      });
    } else {
      isTest = true;
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      console.log('--- MODO DE PRUEBA ACTIVADO: USANDO CORREO GENERICO ---');
    }

    // Configuramos el correo a enviar
    const mailOptions = {
      from: `"Visionary AI Diagnostics" <${process.env.SMTP_USER || 'test@visionary.ai'}>`, // Quien lo envía
      to: process.env.RECEIVER_EMAIL || 'ceo@visionary.ai', // A dónde te llegan a ti (como dueño de la agencia)
      replyTo: email, // Para que puedas darle "Responder" directamente al cliente
      subject: `⚡ Nuevo Lead (Diagnóstico): ${name}`,
      text: `Nombre: ${name}\nCorreo: ${email}\nCuello de botella:\n${description}`,
      html: `
        <div style="font-family: sans-serif; color: #111;">
          <h2 style="color: #000;">Nueva Solicitud de Diagnóstico IA</h2>
          <p><strong>Prospecto:</strong> ${name}</p>
          <p><strong>Correo Electrónico:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Descripción del cuello de botella:</strong></p>
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <p style="margin: 0; line-height: 1.5;">${description}</p>
          </div>
          <br/>
          <p style="font-size: 12px; color: #6b7280;">Enviado desde el formulario de Visionary.ai</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    let testUrl = '';
    if (isTest) {
      testUrl = nodemailer.getTestMessageUrl(info) || '';
      console.log('✅ Correo de prueba enviado exitosamente. Puedes visualizarlo en esta URL: %s', testUrl);
    }

    return NextResponse.json({ 
      success: true, 
      message: isTest ? 'Correo enviado en modo prueba.' : 'Email procesado correctamente.',
      testUrl: testUrl
    });
  } catch (error: any) {
    console.error('Error enviando email:', error);
    return NextResponse.json({ error: error.message || 'Error del servidor al procesar el correo.' }, { status: 500 });
  }
}
