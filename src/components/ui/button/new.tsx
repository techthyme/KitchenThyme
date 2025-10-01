"use client";
import { FC } from "react";
import Icon, { IconVariant } from "@/components/ui/icons";
interface NewButtonProps {
  onClick?: (e: any) => void;
}
const NewButton: FC<NewButtonProps> = ({ onClick }) => {
  return (
    <button className="bg-frosty rounded-full p-4 shadow-sm" onClick={onClick}>
      <Icon variant={IconVariant.NEW} />
      {/* add text */}
      {/* add right icon */}
    </button>
  );
};

export default NewButton;
