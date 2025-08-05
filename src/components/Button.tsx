import type { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode | string;
  variant?: "primary" | "secondary";
  disabled: boolean;
  onClick: () => void;
  className?: string;
  active?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  className = "",
  active = false,
  ...props
}: IButtonProps) => {
  const baseClasses =
    "px-3 py-2 text-sm rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer font-medium";

  const variants = {
    primary: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
  };

  const activeClasses =
    "bg-blue-600 text-white hover:bg-blue-700 border-blue-600 px-4 py-2.5 text-base font-semibold shadow-lg transform scale-105 ring-2 ring-blue-300 ring-opacity-50";

  const finalClasses = active
    ? `${baseClasses} ${activeClasses} ${className}`
    : `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <button
      className={finalClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
