import { FC } from "react";
import Icon, { IconVariant } from "@/components/ui/icons";
interface SocialButtonProps {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}
//"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
const SocialButton: FC<SocialButtonProps> = ({ onClick, text, type }) => {
  // let _type = type || "button";
  return (
    <button
      type={type}
      className="flex items-center w-full rounded-xl align-bottom
       bg-white px-4 py-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >
      <div className="flex-initial">
        <Icon variant={IconVariant.APPLE} />
      </div>

      <div className="flex-auto">{text}</div>
    </button>
  );
};

export default SocialButton;
