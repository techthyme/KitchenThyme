"use client";
import { FC } from "react";
import Icon, { IconVariant } from "@/components/ui/icons";
interface DeleteButtonProps {
  onClick?: (e: any) => void;
}
const DeleteButton: FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <button className="flex items-start " onClick={onClick}>
      <Icon variant={IconVariant.TRASH} />
      {/* add right icon */}
    </button>
  );
};

export default DeleteButton;
