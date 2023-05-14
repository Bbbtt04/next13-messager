import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  disabled?: boolean;
  danger?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  children,
  disabled = false,
  danger = false,
  fullWidth = false,
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(`
        flex
        justify-center
        rounded-md
        px-3
        py-2
        text-sm
        text-white
        font-semibold
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        `,
        fullWidth && "w-full",
        danger ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600",
        disabled ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer",
      )}
    >
      {children}
    </button>
  )
}
export default Button;
