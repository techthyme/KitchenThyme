import { FC } from "react";
import Icon from "@/components/ui/icons";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import FilterButton from "./filter";
import MoreButton from "./more";
import DefaultButton from "./default";
import PrimaryButton from "./primary";
import DeleteButton from "./delete";
import ListButton from "./list";
import NewButton from "./new";

export enum ButtonVariant {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  WARNING = "warning",
  SUCCESS = "success",
  FILTER = "filter",
  MORE = "more",
  NEW = "new",
  DELETE = "delete",
  LIST = "list",
  DO = "do",
}
export interface ButtonProps {
  variant: ButtonVariant;
  text?: string;
  disabled?: boolean;
  icon?: typeof Icon;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (e: any) => void;
  iconAlignqment?: IconAlignment;
}

export enum IconAlignment {
  LEFT = "left",
  RIGHT = "right",
  CENTER = "center",
}

const Button: FC<ButtonProps> = ({
  variant,
  type,
  text,
  onClick,
  disabled,
}) => {
  switch (variant) {
    case ButtonVariant.DO:
      return (
        <button
          type={type}
          onClick={onClick ?? onClick}
          className="rounded-full p-2 mr-1 text-sm font-semibold 
          text-gray-300 border border-gray-300 shadow-sm hover:bg-sky-300"
        >
          <div className="-rotate-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 -rotate-12 hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </div>
        </button>
      );
    case ButtonVariant.PRIMARY:
      if (!text) throw new Error("Text is required for primary button");

      <PrimaryButton
        text={text!}
        type={type}
        disabled={disabled}
        onClick={(e) => {
          if (onClick) onClick(e);
        }}
      />;

    case ButtonVariant.FILTER:
      return (
        <FilterButton
          onClick={(e) => {
            if (onClick) onClick(e);
          }}
        />
      );
    case ButtonVariant.NEW:
      return (
        <NewButton
          onClick={(e) => {
            if (onClick) onClick(e);
          }}
        />
      );
    case ButtonVariant.MORE:
      return (
        <MoreButton
          onClick={(e) => {
            if (onClick) onClick(e);
          }}
        />
      );
    case ButtonVariant.DELETE:
      return (
        <DeleteButton
          onClick={(e) => {
            if (onClick) onClick(e);
          }}
        />
      );
    case ButtonVariant.LIST:
      return (
        <ListButton
          text={text!}
          onClick={(e) => {
            if (onClick) onClick(e);
          }}
        />
      );

    default:
      return (
        <DefaultButton
          onClick={(e) => {
            if (onClick) onClick(e);
          }}
        />
      );
  }
};

export default Button;
