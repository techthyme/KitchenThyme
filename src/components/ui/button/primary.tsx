"use client";
import { FC } from "react";
import clsx from "clsx";
import { CTA_BUTTON_STYLE } from "@/globals";
interface PrimaryButtonProps {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (e: any) => void;
  disabled?: boolean;
}
//"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
const PrimaryButton: FC<PrimaryButtonProps> = ({
  onClick,
  text,
  type,
  disabled,
}) => {
  // let _type = type || "button";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={clsx(
        `w-full rounded-full shadow-md px-5 py-4 text-sm font-semibold 
         text-white hover:bg-gradient-to-r focus-visible:outline 
         focus-visible:outline-2 focus-visible:outline-offset-2
         focus-visible:outline-indigo-600`,
        CTA_BUTTON_STYLE,
      )}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
