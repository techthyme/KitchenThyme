/**
 * mega: 32-64px (text-5xl/6xl) - Hero statements
 * huge: 26px (text-2xl) - Main page inspiration
 * section: 22px (text-xl) - Section headers
 * group: 18px (text-lg) - Group labels
 * normal: 16px (text-base) - Main content
 * label: 14px (text-sm) - secondary content, links
 * caption: 12px (text-xs) - Fine print, timestamps
 * overline: 11px (text-xs) - Category tags with uppercase styling
 */

import { FC } from "react";
import Link from "next/link";
import clsx from "clsx";
import { IconVariant } from "../icons";

export interface TextProps {
  id?: string;
  text: string;
  variant:
    | "mega" // - Hero statements
    | "huge"
    | "section"
    | "group"
    | "normal"
    | "mini"
    | "label"
    | "caption"
    | "overline"
    | "link"
    | "rate"
    | "error"
    | "success"
    | "warning"
    | "info";
  href?: string;
  pricingType?: RateVariant;
  className?: string;
  clamp?: number;
  color?: string;
  alignment?: "center" | "left" | "right";
  iconVariant?: IconVariant; // FIXME: do away with the IconVariant type and replace with the string names
  bold?: boolean;
  right?: boolean;
  left?: boolean;
  center?: boolean;
}

// FIXME: need to deprecate this and get the variant from the rule as we don't use rates any more
// instead we're using rules that have the type rate
export enum RateVariant {
  DAILY = "daily",
  PER_GUEST = "per-guest",
  PER_STAY = "per-stay",
}

const Text: FC<TextProps> = ({
  id,
  text,
  variant,
  pricingType,
  href,
  color,
  className,
  alignment,
  bold = false,
}) => {
  if (variant === "link" && !href) {
    throw new Error("variant 'link' requires href prop");
  }

  // FIXME: update the aligment string the use the right, center, and left boolean flags.
  const baseClasses = clsx(
    `${alignment ? `text-${alignment}` : ""}`,
    bold && "font-medium",
    className
  );

  switch (variant) {
    case "mega":
      return (
        <h1
          className={clsx(
            baseClasses,
            "text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100"
          )}
          style={{ color: color }}
        >
          {text}
        </h1>
      );

    case "huge":
      return (
        <h2
          className={clsx(
            baseClasses,
            "text-2xl font-bold text-gray-900 --dark:text-gray-100"
          )}
          style={{ color: color }}
        >
          {text}
        </h2>
      );

    case "section":
      return (
        <h3
          className={clsx(
            baseClasses,
            "text-xl font-semibold text-gray-900 --dark:text-gray-100"
          )}
          style={{ color: color }}
        >
          {text}
        </h3>
      );

    case "group":
      return (
        <h3
          className={clsx(
            baseClasses,
            "font-medium text-gray-900 -dark:text-gray-100"
          )}
          style={{ color: color }}
        >
          {text}
        </h3>
      );

    case "normal":
      return (
        <p
          className={clsx(
            baseClasses,
            "text-base text-gray-900 --dark:text-gray-100",
            !bold && "font-normal"
          )}
          style={{ color: color }}
        >
          {text}
        </p>
      );
    case "mini":
      return (
        <p
          className={clsx(
            baseClasses,
            "text-sm text-gray-900 --dark:text-gray-100",
            !bold && "font-normal"
          )}
          style={{ color: color }}
        >
          {text}
        </p>
      );

    case "label":
      return (
        <label
          htmlFor={id}
          className={clsx(
            baseClasses,
            "text-sm font-normal text-gray-700 dark:text-gray-300 cursor-pointer select-none"
          )}
          style={{ color: color }}
        >
          {text}
        </label>
      );

    case "caption":
      return (
        <span
          className={clsx(
            baseClasses,
            "text-xs font-medium text-gray-600 dark:text-gray-400"
          )}
          style={{ color: color }}
        >
          {text}
        </span>
      );

    case "overline":
      return (
        <span
          className={clsx(
            baseClasses,
            "text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400"
          )}
          style={{
            color: color,
            letterSpacing: "0.5px",
          }}
        >
          {text}
        </span>
      );

    case "link":
      return (
        <Link
          className={clsx(
            baseClasses,
            "text-base font-normal text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
          )}
          href={href!}
          style={{ color: color }}
        >
          {text}
        </Link>
      );

    case "rate":
      return (
        <p
          className={clsx(
            baseClasses,
            "text-base font-normal text-gray-900 dark:text-gray-100"
          )}
          style={{ color: color }}
        >
          {pricingType === RateVariant.DAILY
            ? `${text} / night`
            : pricingType === RateVariant.PER_GUEST
            ? `${text} / guest`
            : pricingType === RateVariant.PER_STAY
            ? `${text} / stay`
            : `${text}`}
        </p>
      );

    case "error":
      return (
        <p
          className={clsx(
            baseClasses,
            "text-sm font-normal text-red-600 dark:text-red-400"
          )}
          style={{ color: color }}
        >
          {text}
        </p>
      );

    case "success":
      return (
        <p
          className={clsx(
            baseClasses,
            "text-sm font-normal text-green-600 dark:text-green-400"
          )}
          style={{ color: color }}
        >
          {text}
        </p>
      );

    case "warning":
      return (
        <p
          className={clsx(
            baseClasses,
            "text-sm font-normal text-yellow-600 dark:text-yellow-400"
          )}
          style={{ color: color }}
        >
          {text}
        </p>
      );

    case "info":
      return (
        <p
          className={clsx(
            baseClasses,
            "text-sm font-normal text-blue-600 dark:text-blue-400"
          )}
          style={{ color: color }}
        >
          {text}
        </p>
      );

    default:
      return (
        <span
          className={clsx(baseClasses, "text-base font-normal")}
          style={{ color: color }}
        >
          {text}
        </span>
      );
  }
};

export default Text;
