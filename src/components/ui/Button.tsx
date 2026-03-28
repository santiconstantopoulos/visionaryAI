import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", ...props }, ref) => {
    // Highly polished micro-interactions and transitions
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 py-2";
    
    const variants = {
      primary: "bg-black text-white shadow-sm hover:bg-gray-900 hover:shadow-md hover:-translate-y-[1px] active:translate-y-0",
      secondary: "bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100 hover:border-gray-300",
      ghost: "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
