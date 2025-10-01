"use client";
import { FC } from "react";
import Icon, { IconVariant } from "@/components/ui/icons";
interface FilterButtonProps {
  onClick?: (e: any) => void;
}
const FilterButton: FC<FilterButtonProps> = ({ onClick }) => {
  return (
    <button
      className="border-4 border-white	text-gray-400 rounded-full p-2 shadow-sm"
      onClick={onClick}
    >
      <Icon variant={IconVariant.FILTER} />
      {/* add text */}
      {/* add right icon */}
    </button>
  );
};

export default FilterButton;
