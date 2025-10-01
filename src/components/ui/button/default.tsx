"use client";
import { FC } from "react";
import Icon, { IconVariant } from "@/components/ui/icons";
interface DefaultButtonProps {
  onClick?: () => void;
}
const DefaultButton: FC<DefaultButtonProps> = ({ onClick }) => {
  return (
    <button
      className="flex items-center h-full w-full text-center"
      onClick={onClick}
    >
      <Icon variant={IconVariant.MORE} />
      {/* add text */}
      Add
      {/* add right icon */}
    </button>
  );
};

export default DefaultButton;
