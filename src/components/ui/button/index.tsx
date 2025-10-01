import { FC } from "react";
import Icon, { IconVariant } from "@/components/ui/icons";
import { SizeVariants } from "@/types";
import clsx from "clsx";

type Position = "center" | "left" | "right";

export interface ButtonProps {
  children?: React.ReactNode;
  position?: Position;
  id?: string;
  className?: string;
  size?: SizeVariants;
  pillColor?: string;
  variant:
    | "primary"
    | "secondary"
    | "pill"
    | "action"
    | "link"
    | "icon"
    | "sr-only"
    | "plain";
  disabled?: boolean;
  loading?: boolean; // Add loading state
  circle?: boolean;
  fullWidth?: boolean;
  ariaLabel?: string;
  icon?: {
    left?: IconVariant;
    right?: IconVariant;
  };
  centerIcon?: IconVariant;
  topIcon?: IconVariant;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (e: any) => void;
}

const Button: FC<ButtonProps> = ({
  variant,
  id,
  circle,
  type,
  fullWidth,
  size = "md",
  onClick,
  disabled,
  loading, // Destructure loading state
  icon,
  children,
  position = "center",
  className,
  ariaLabel,
}) => {
  const baseButtonStyles = `cursor-pointer focus-visible:outline 
    focus-visible:outline-2 focus-visible:outline-offset-2 flex gap-2`;

  const computedAriaLabel =
    ariaLabel || (typeof children === "string" ? children : "button action");
  const variantClasses: Record<string, string> = {
    primary: ` min-h-12 font-semibold shadow-md transition duration-300 ease-in-out px-4 py-2 ${
      !disabled
        ? " text-gray-600 bg-gradient-to-r from-cyan-300 to-teal-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-300"
        : " bg-gray-200"
    }`,
    secondary:
      "min-h-12 bg-white hover:bg-gray-100 text-gray-500 border border-gray-300",
    action:
      "text-xl text-gray-500 bg-white hover:bg-gray-100 p-2 min-h-0 min-w-9 min-h-9 shadow-sm -dark:text-gray-00",

    pill: "text-white shadow-md from-cyan-400 to-green-300 hover:from-cyan-400 hover:to-green-400 transition duration-300 ease-in-out px-4 py-2",
    icon: " text-gray-500  min-w-[36px] min-h-[36px] hover:bg-gray-200 border-gray-400",
    link: "text-left text-blue-500 dark:text-blue-400 py-0 px-0 items-center h-auto min-h-fit",
    plain:
      "text-base text-gray-800 font-medium border border-gray-300 px-6 py-3 hover:border-gray-400 transition-colors",
  };

  const sizeClasses: Record<SizeVariants, string> = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const textPositionClasses: Record<Position, string> = {
    center: "text-center items-center justify-center",
    left: "text-left justify-start",
    right: "text-right justify-end",
  };

  if (variant === "sr-only")
    return (
      <button className="sr-only" type="submit">
        {children}
      </button>
    );

  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled || loading} // Disable the button if loading
      type={type}
      aria-label={computedAriaLabel}
      className={clsx(
        baseButtonStyles,
        sizeClasses[size],
        variantClasses[variant],
        textPositionClasses[position],
        circle ? "rounded-full" : "rounded-xl",
        loading && "cursor-wait opacity-75 bg-gray-400",
        disabled && "hover:bg-gray-100 bg-gray-100 text-gray-400",
        fullWidth && "w-full",
        className && className,
      )}
    >
      {loading ? (
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          {icon && icon.left && <Icon variant={icon.left} />}
          {children}
          {icon && icon.right && <Icon variant={icon.right} />}
        </>
      )}
    </button>
  );
};

export default Button;
