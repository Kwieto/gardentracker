import React from "react";
import clsx from "clsx";

type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "danger";
    onClick?: () => void;
};

const Button: React.FC<ButtonProps & { className?: string }> = ({ children, variant = "primary", onClick, className }) => {
    const buttonClasses = clsx(
        "px-4 py-2 rounded-md font-semibold transition",
        {
            "bg-blue-500 text-white hover:bg-blue-600": variant === "primary",
            "bg-gray-500 text-white hover:bg-gray-600": variant === "secondary",
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
