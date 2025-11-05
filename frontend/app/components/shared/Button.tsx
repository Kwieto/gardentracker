import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "warning" | "danger";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps & { className?: string }> =
  ({children, variant = "primary", onClick, className}) => {
    const buttonClasses = clsx(
      "px-4 py-2 rounded-md font-semibold transition",
      {
        "bg-green-500 text-white hover:bg-green-600": variant === "primary",
        "bg-blue-500 text-white hover:bg-blue-600": variant === "secondary",
        "bg-yellow-500 text-white hover:bg-yellow-600": variant === "warning",
        "bg-red-500 text-white hover:bg-red-600": variant === "danger",
      }
    );
    return (
      <button className={clsx(buttonClasses, className)} onClick={onClick}>
        {children}
      </button>
    );
  };

export default Button;
