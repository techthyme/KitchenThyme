import { FC } from "react";
import Icon, { IconVariant } from "@/components/ui/icons";
interface MoreButtonProps {
  onClick?: (e: any) => void;
}
const MoreButton: FC<MoreButtonProps> = ({ onClick }) => {
  return (
    <button
      className="flex items-center h-full w-full text-center"
      onClick={onClick}
    >
      <Icon variant={IconVariant.MORE} />
      {/* add text */}

      {/* add right icon */}
    </button>
  );
};

export default MoreButton;
