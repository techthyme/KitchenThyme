"use client";
import { FC } from "react";
import Icon, { IconVariant } from "@/components/ui/icons";
interface ListButtonProps {
  onClick?: (e: any) => void;
  text: string;
}
const ListButton: FC<ListButtonProps> = ({ onClick, text }) => {
  return (
    <div className="overflow-hidden rounded-xl border bg-white border-gray-200 mb-4">
      <button
        className="flex w-full items-center text-center justify-center gap-x-4 border-b border-gray-900/5  p-6 "
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default ListButton;
