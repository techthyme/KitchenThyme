import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "dark";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "relative isolate inline-flex shrink-0 items-center justify-center gap-x-2 rounded-full border font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variantClasses = {
    primary:
      "text-white bg-primary-500 border-primary-600 hover:bg-primary-600 focus:ring-primary-500 shadow-lg hover:shadow-xl",
    secondary:
      "text-primary-700 bg-primary-50 border-primary-200 hover:bg-primary-100 focus:ring-primary-500 dark:text-primary-300 dark:bg-primary-900/20 dark:border-primary-800 dark:hover:bg-primary-900/30",
    outline:
      "border-neutral-200 text-neutral-700 bg-transparent hover:bg-neutral-50 focus:ring-neutral-500 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800",
    dark: "text-white bg-neutral-900 border-neutral-900 hover:bg-neutral-800 focus:ring-neutral-500 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} role="button">
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
