"use client";
import { FC } from "react";
import Icon, { IconVariant } from "@/components/ui/icons";
interface KnobButtonProps {
  onClick?: (e: any) => void;
  leftIcon?: IconVariant;
  rightIcon?: IconVariant;
  text?: string;
}
const KnobButton: FC<KnobButtonProps> = ({
  onClick,
  leftIcon,
  text,
  rightIcon,
}) => {
  return (
    <button
      className="text-white bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-200 
     shadow-sm shadow-gray-200/20 dark:shadow-lg dark:shadow-gray-400/20 
      font-medium rounded-full text-sm p-4 text-center mr-2 mb-2 border-1s border-gray-200/20 dark:border-gray-200/20"
      onClick={onClick}
    >
      <span>{leftIcon && <Icon variant={leftIcon} />}</span>
      <span>{text}</span>
      <span>{rightIcon && <Icon variant={rightIcon} />}</span>
    </button>
  );
};

export default KnobButton;
