import Button from ".";
import { IconVariant } from "../icons";

interface FilterButtonProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  iconVariant?: IconVariant;
}

const CheckButton: React.FC<FilterButtonProps> = ({
  label,
  checked,
  onChange,
  iconVariant,
}) => {
  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <Button
      icon={{ left: iconVariant }}
      variant="action"
      size="sm"
      className={`w-full  py-2 rounded border  transition-colors 
                  ${
                    checked
                      ? " border-cyan-600"
                      : " text-gray-800 border-gray-300"
                  }`}
      onClick={handleClick}
      aria-pressed={checked}
    >
      {label}
    </Button>
  );
};

export default CheckButton;
