import { FC } from "react";

export interface IconProps {
  variant: IconVariant;
  strokeWidth?: number;
}

export enum IconVariant {
  ADD = "add",
  MAP = "map",
  SEARCH = "search",
  CHEVRON_DOWN = "chevron-down",
  STAY = "stay",
  PHONE = "phone",
  BARS3 = "bars3",
  BELL = "bell",
  XMARK = "x-mark",
  FILTER = "filter",
  BAG = "bag",
  CHAT = "chat",
  MORE = "more",
  TRASH = "trash",
  DATE = "date",
  GOOGLE = "google",
  APPLE = "apple",
  HEART = "heart",
  EATS = "eats",
  JOURNEY = "journey",
  MAGIC = "magic",
  RIDES = "rides",
  PLAY = "play",
  WIDE = "wide",
  NEW = "new",
  FLIGHT = "flight",
  EVENTS = "events",
  SERVICE = "service",
  CAMERA = "camera",
  BED = "bed",
  BATH = "bath",
  RETRY = "RETRY",
  VIEW = "view",
  HIDE = "hide",
  AVATAR = "avatar",
  ID = "id",
}

const Icon: FC<IconProps> = ({ variant, strokeWidth }) => {
  const sw = strokeWidth === undefined ? strokeWidth : 1.5;
  switch (variant) {
    case IconVariant.ADD:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          strokeWidth={sw}
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeDasharray="16"
            strokeDashoffset="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M5 12h14">
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.2s"
                values="16;0"
              ></animate>
            </path>
            <path d="M12 5v14">
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.2s"
                dur="0.2s"
                values="16;0"
              ></animate>
            </path>
          </g>
        </svg>
      );
    case IconVariant.ID:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
        >
          <path d="M160-80q-33 0-56.5-23.5T80-160v-440q0-33 23.5-56.5T160-680h200v-120q0-33 23.5-56.5T440-880h80q33 0 56.5 23.5T600-800v120h200q33 0 56.5 23.5T880-600v440q0 33-23.5 56.5T800-80H160Zm0-80h640v-440H600q0 33-23.5 56.5T520-520h-80q-33 0-56.5-23.5T360-600H160v440Zm80-80h240v-18q0-17-9.5-31.5T444-312q-20-9-40.5-13.5T360-330q-23 0-43.5 4.5T276-312q-17 8-26.5 22.5T240-258v18Zm320-60h160v-60H560v60Zm-200-60q25 0 42.5-17.5T420-420q0-25-17.5-42.5T360-480q-25 0-42.5 17.5T300-420q0 25 17.5 42.5T360-360Zm200-60h160v-60H560v60ZM440-600h80v-200h-80v200Zm40 220Z" />
        </svg>
      );
    case IconVariant.AVATAR:
      return (
        <svg
          className="w-10 h-10 relative -bottom-1 text-gray-400 "
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          ></path>
        </svg>
      );
    case IconVariant.HIDE:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="currentColor"
          className="w-4 h-4 text-gray-900 text-sm dark:text-gray-300"
        >
          <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
        </svg>
      );
    case IconVariant.VIEW:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-gray-900 text-sm dark:text-gray-300"
          viewBox="0 -960 960 960"
          fill="currentColor"
        >
          <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
        </svg>
      );
    case IconVariant.CHEVRON_DOWN:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
        </svg>
      );
    case IconVariant.BATH:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="M320-240q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm160 0q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm160 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240ZM200-400v-80q0-106 68-184t172-92v-84h80v84q104 14 172 92t68 184v80H200Zm80-80h400q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480Zm40 360q-17 0-28.5-11.5T280-160q0-17 11.5-28.5T320-200q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120Zm160 0q-17 0-28.5-11.5T440-160q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160q0 17-11.5 28.5T480-120Zm160 0q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200q17 0 28.5 11.5T680-160q0 17-11.5 28.5T640-120ZM480-480Z" />
        </svg>
      );
    case IconVariant.BED:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z" />
        </svg>
      );
    case IconVariant.CAMERA:
      return (
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
        </svg>
      );
    case IconVariant.STAY:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="none"
          strokeWidth={20}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M160-120v-375l-72 55-48-64 120-92v-124h80v63l240-183 440 336-48 63-72-54v375H160Zm80-80h200v-160h80v160h200v-356L480-739 240-556v356Zm-80-560q0-50 35-85t85-35q17 0 28.5-11.5T320-920h80q0 50-35 85t-85 35q-17 0-28.5 11.5T240-760h-80Zm80 560h480-480Z"
          />
        </svg>
      );
    case IconVariant.FLIGHT:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="none"
          strokeWidth={20}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="m397-115-99-184-184-99 71-70 145 25 102-102-317-135 84-86 385 68 124-124q23-23 57-23t57 23q23 23 23 56.5T822-709L697-584l68 384-85 85-136-317-102 102 26 144-71 71Z"
          />
        </svg>
      );
    case IconVariant.SERVICE:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="none"
          strokeWidth={20}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M80-200v-80h800v80H80Zm40-120v-40q0-128 78.5-226T400-710v-10q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720v10q124 26 202 124t78 226v40H120Zm82-80h556q-14-104-93-172t-185-68q-106 0-184.5 68T202-400Zm278 0Z"
          />
        </svg>
      );
    case IconVariant.EVENTS:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="none"
          strokeWidth={20}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path d="m80-80 200-560 360 360L80-80Zm132-132 282-100-182-182-100 282Zm370-246-42-42 224-224q32-32 77-32t77 32l24 24-42 42-24-24q-14-14-35-14t-35 14L582-458ZM422-618l-42-42 24-24q14-14 14-34t-14-34l-26-26 42-42 26 26q32 32 32 76t-32 76l-24 24Zm80 80-42-42 144-144q14-14 14-35t-14-35l-64-64 42-42 64 64q32 32 32 77t-32 77L502-538Zm160 160-42-42 64-64q32-32 77-32t77 32l64 64-42 42-64-64q-14-14-35-14t-35 14l-64 64ZM212-212Z" />
        </svg>
      );
    case IconVariant.MAP:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={sw}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
          />
        </svg>
      );
    case IconVariant.SEARCH:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={sw}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      );
    case IconVariant.PHONE:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={sw}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      );
    case IconVariant.BARS3:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={sw}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      );
    case IconVariant.BELL:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={sw}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
      );
    case IconVariant.XMARK:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={sw}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      );
    case IconVariant.NEW:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      );
    case IconVariant.FILTER:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={sw}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      );
    case IconVariant.BAG:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={sw}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      );
    case IconVariant.CHAT:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={sw}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
      );
    case IconVariant.MAGIC:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={24}
          height={24}
          x={0}
          y={0}
          viewBox="0 0 512.002 512.002"
          xmlSpace="preserve"
        >
          <g>
            <path
              d="m288.265 380.223-6.303-1.278a32.654 32.654 0 0 1-25.562-25.562l-1.278-6.304c-1.474-7.264-7.678-12.338-15.091-12.338s-13.617 5.073-15.091 12.339l-1.278 6.303a32.652 32.652 0 0 1-25.562 25.562l-6.303 1.279c-7.264 1.473-12.339 7.678-12.339 15.091 0 7.412 5.074 13.617 12.339 15.091l6.303 1.278a32.652 32.652 0 0 1 25.562 25.562l1.278 6.304c1.474 7.264 7.678 12.338 15.091 12.338s13.617-5.073 15.091-12.338l1.278-6.304a32.652 32.652 0 0 1 25.562-25.562l6.303-1.278c7.264-1.473 12.339-7.678 12.339-15.091 0-7.412-5.074-13.619-12.339-15.092zm-2.897 15.229a1.138 1.138 0 0 1-.127.034l-6.303 1.278a47.85 47.85 0 0 0-37.456 37.456l-1.278 6.303a1.322 1.322 0 0 1-.031.127.727.727 0 0 1-.279 0 1.127 1.127 0 0 1-.031-.127l-1.278-6.304a47.849 47.849 0 0 0-37.457-37.456l-6.303-1.278a1.713 1.713 0 0 1-.127-.031.727.727 0 0 1 0-.279.943.943 0 0 1 .127-.031l6.303-1.279a47.849 47.849 0 0 0 37.457-37.456l1.278-6.303c.011-.054.022-.096.031-.127a.727.727 0 0 1 .279 0c.009.03.021.072.031.127l1.278 6.303a47.849 47.849 0 0 0 37.456 37.456l6.303 1.278c.054.011.095.022.127.031a.722.722 0 0 1 0 .278zM391.298 407.923a7.612 7.612 0 0 0-7.611 7.611v20.609a7.612 7.612 0 0 0 15.222 0v-20.609a7.612 7.612 0 0 0-7.611-7.611zM391.298 463.406a7.612 7.612 0 0 0-7.611 7.611v20.609a7.612 7.612 0 0 0 15.222 0v-20.609a7.612 7.612 0 0 0-7.611-7.611zM429.345 445.968h-20.609a7.612 7.612 0 0 0 0 15.222h20.609a7.612 7.612 0 0 0 0-15.222zM373.861 445.968h-20.609a7.612 7.612 0 0 0 0 15.222h20.609a7.612 7.612 0 0 0 0-15.222zM45.657 312.019a7.612 7.612 0 0 0-7.611 7.611v20.609a7.61 7.61 0 1 0 15.222 0V319.63a7.61 7.61 0 0 0-7.611-7.611zM45.657 367.503a7.612 7.612 0 0 0-7.611 7.611v20.609a7.61 7.61 0 1 0 15.222 0v-20.609a7.61 7.61 0 0 0-7.611-7.611zM83.704 350.066H63.095a7.61 7.61 0 1 0 0 15.222h20.609a7.612 7.612 0 0 0 0-15.222zM28.22 350.066H7.611a7.61 7.61 0 1 0 0 15.222H28.22a7.61 7.61 0 1 0 0-15.222zM392.284 14.471a7.612 7.612 0 0 0-7.611 7.611v20.609a7.612 7.612 0 0 0 15.222 0V22.083a7.61 7.61 0 0 0-7.611-7.612zM392.284 69.955a7.612 7.612 0 0 0-7.611 7.611v20.609a7.61 7.61 0 0 0 15.222-.001V77.567a7.61 7.61 0 0 0-7.611-7.612zM430.331 52.517h-20.609a7.61 7.61 0 1 0 0 15.222h20.609a7.61 7.61 0 1 0 0-15.222zM374.847 52.517h-20.609a7.61 7.61 0 1 0 0 15.222h20.609a7.612 7.612 0 0 0 0-15.222zM290.164 118.881l-30.171-6.117a67.767 67.767 0 0 1-53.048-53.048l-6.117-30.17c-2.035-10.038-10.283-16.782-20.525-16.782-10.241 0-18.491 6.745-20.526 16.782l-6.117 30.17a67.767 67.767 0 0 1-53.048 53.048l-30.17 6.117c-10.038 2.035-16.782 10.284-16.782 20.525 0 10.242 6.745 18.491 16.782 20.525l30.17 6.116a67.767 67.767 0 0 1 53.048 53.048l6.117 30.17c2.035 10.038 10.284 16.782 20.526 16.782s18.49-6.745 20.525-16.782l6.117-30.17a67.766 67.766 0 0 1 53.048-53.048l30.171-6.116c10.038-2.035 16.782-10.284 16.782-20.525 0-10.24-6.744-18.489-16.782-20.525zm-3.024 26.132-30.17 6.117a82.96 82.96 0 0 0-64.943 64.943l-6.117 30.17c-.863 4.253-4.509 4.584-5.606 4.584s-4.744-.331-5.606-4.584l-6.117-30.17a82.96 82.96 0 0 0-64.943-64.943l-30.17-6.117c-4.253-.863-4.584-4.509-4.584-5.606s.331-4.744 4.584-5.607l30.17-6.116a82.962 82.962 0 0 0 64.943-64.942l6.117-30.17c.863-4.253 4.509-4.584 5.606-4.584s4.743.331 5.606 4.584l6.117 30.17a82.96 82.96 0 0 0 64.943 64.942l30.17 6.116c4.253.863 4.584 4.509 4.584 5.607 0 1.098-.331 4.744-4.584 5.606zM497.698 231.343l-23.17-4.698a50.28 50.28 0 0 1-39.36-39.36l-4.698-23.17c-1.707-8.421-8.901-14.303-17.493-14.303-8.593 0-15.787 5.882-17.494 14.303l-4.698 23.17a50.279 50.279 0 0 1-39.36 39.36l-23.17 4.698c-8.421 1.707-14.303 8.901-14.303 17.494s5.881 15.786 14.303 17.494l23.17 4.698a50.279 50.279 0 0 1 39.36 39.359l4.698 23.17c1.708 8.421 8.901 14.303 17.495 14.303 8.593 0 15.786-5.882 17.493-14.303l4.698-23.17a50.278 50.278 0 0 1 39.36-39.359l23.17-4.698c8.421-1.708 14.303-8.901 14.303-17.494s-5.883-15.786-14.304-17.494zm-3.026 20.068-23.17 4.698a65.475 65.475 0 0 0-51.254 51.254l-4.698 23.17c-.283 1.396-1.149 2.105-2.575 2.105-1.426 0-2.292-.708-2.575-2.105l-4.698-23.17a65.473 65.473 0 0 0-51.254-51.254l-23.17-4.698c-1.396-.283-2.105-1.15-2.105-2.575s.708-2.292 2.105-2.575l23.17-4.698a65.474 65.474 0 0 0 51.254-51.254l4.698-23.17c.283-1.396 1.15-2.105 2.575-2.105 1.425 0 2.292.708 2.575 2.105l4.698 23.17a65.475 65.475 0 0 0 51.254 51.254l23.17 4.698c1.396.283 2.105 1.15 2.105 2.575s-.707 2.292-2.105 2.575z"
              fill="#000000"
              opacity={1}
              data-original="#000000"
            />
          </g>
        </svg>
      );
    case IconVariant.JOURNEY:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={24}
          height={24}
          x={0}
          y={0}
          viewBox="0 0 64 64"
          xmlSpace="preserve"
          className=""
        >
          <g transform="matrix(1,0,0,1,0,0)">
            <g data-name="Outline">
              <circle
                cx={23}
                cy={61}
                r={1}
                fill="#000000"
                opacity={1}
                data-original="#000000"
                className=""
              />
              <path
                d="M52.88 43.75h-3.161a2.987 2.987 0 0 0-5.438 0h-1.9a7.375 7.375 0 1 1 0-14.75H44a1 1 0 0 0 0-2h-1.62a9.375 9.375 0 1 0 0 18.75h1.727a2.985 2.985 0 0 0 5.786 0h2.987a7.125 7.125 0 0 1 0 14.25H27a1 1 0 0 0 0 2h25.88a9.125 9.125 0 0 0 0-18.25zM47 46a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"
                fill="#000000"
                opacity={1}
                data-original="#000000"
                className=""
              />
              <path
                d="M31 42.507a14.5 14.5 0 1 0-20.486 13.205l3.535 5.011a3.019 3.019 0 0 0 4.9 0l3.535-5.011A14.49 14.49 0 0 0 31 42.507zM21.434 53.99a1 1 0 0 0-.422.343l-3.7 5.237a1.026 1.026 0 0 1-1.632 0l-3.7-5.237a1 1 0 0 0-.422-.343 12.5 12.5 0 1 1 9.868 0z"
                fill="#000000"
                opacity={1}
                data-original="#000000"
                className=""
              />
              <path
                d="M16.5 33.5a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9zm0 16a7 7 0 1 1 7-7 7.009 7.009 0 0 1-7 7zM50 2a12 12 0 0 0-4.188 23.237l1.77 2.51a2.98 2.98 0 0 0 4.836 0l1.77-2.51A12 12 0 0 0 50 2zm3.23 21.456a1 1 0 0 0-.494.37L50.783 26.6a.987.987 0 0 1-1.566 0l-1.953-2.769a1 1 0 0 0-.494-.37 10 10 0 1 1 6.46 0z"
                fill="#000000"
                opacity={1}
                data-original="#000000"
                className=""
              />
              <path
                d="M50 7a7 7 0 1 0 7 7 7.009 7.009 0 0 0-7-7zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5z"
                fill="#000000"
                opacity={1}
                data-original="#000000"
                className=""
              />
            </g>
          </g>
        </svg>
      );
    case IconVariant.MORE:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={sw}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      );
    case IconVariant.TRASH:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={sw}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      );
    case IconVariant.DATE:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={sw}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
          />
        </svg>
      );
    case IconVariant.GOOGLE:
      return (
        <div className="-ml-0.5 h-5 w-5" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{ display: "block", height: 20, width: 20 }}
          >
            <path
              fill="#4285f4"
              d="M24.12 25c2.82-2.63 4.07-7 3.32-11.19H16.25v4.63h6.37A5.26 5.26 0 0 1 20.25 22z"
            />
            <path
              fill="#34a853"
              d="M5.62 21.31A12 12 0 0 0 24.12 25l-3.87-3a7.16 7.16 0 0 1-10.69-3.75z"
            />
            <path
              fill="#fbbc02"
              d="M9.56 18.25c-.5-1.56-.5-3 0-4.56l-3.94-3.07a12.08 12.08 0 0 0 0 10.7z"
            />
            <path
              fill="#ea4335"
              d="M9.56 13.69c1.38-4.32 7.25-6.82 11.19-3.13l3.44-3.37a11.8 11.8 0 0 0-18.57 3.43l3.94 3.07z"
            />
          </svg>
        </div>
      );
    case IconVariant.APPLE:
      return (
        <div className="-ml-0.5 h-5 w-5" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            role="presentation"
            aria-hidden="true"
            focusable="false"
            style={{
              height: 20,
              width: 20,
              display: "block",
              fill: "currentcolor",
            }}
          >
            <path d="m13.3 2.1a5.1 5.1 0 0 1 3.8-2.1 5.1 5.1 0 0 1 -1.2 3.8 4.1 4.1 0 0 1 -3.6 1.7 4.5 4.5 0 0 1 1-3.4zm-5 3.7c-2.8 0-5.8 2.5-5.8 7.3 0 4.9 3.5 10.9 6.3 10.9 1 0 2.5-1 4-1s2.6.9 4 .9c3.1 0 5.3-6.4 5.3-6.4a5.3 5.3 0 0 1 -3.2-4.9 5.2 5.2 0 0 1 2.6-4.5 5.4 5.4 0 0 0 -4.7-2.4c-2 0-3.5 1.1-4.3 1.1-.9 0-2.4-1-4.2-1z" />
          </svg>
        </div>
      );
    case IconVariant.RIDES:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="fi_3903197"
          data-name="Layer 1"
          viewBox="0 0 512 512"
          width={24}
          height={24}
        >
          <path d="M331.475,229.144a6.329,6.329,0,0,0,.4-5.911l-28.256-61.506A6.229,6.229,0,0,0,298.167,158H84.5a6.867,6.867,0,0,0-6.5,6.475v61.341c0,3.313,3.187,6.184,6.5,6.184H326.422A6.09,6.09,0,0,0,331.475,229.144ZM148,220H90V170h58Zm83,0H160V170h71Zm12,0V170h51.324l22.728,50Z" />
          <path d="M230.081,300h-5.3a6,6,0,0,0,0,12h5.3a6,6,0,1,0,0-12Z" />
          <path d="M346.11,300H250.086a6,6,0,0,0,0,12H346.11a6,6,0,0,0,0-12Z" />
          <path d="M134,323.534a29.324,29.324,0,1,0,29.323,29.323A29.356,29.356,0,0,0,134,323.534Zm0,46.647a17.324,17.324,0,1,1,17.323-17.324A17.343,17.343,0,0,1,134,370.181Z" />
          <path d="M410,323.534a29.324,29.324,0,1,0,29.323,29.323A29.356,29.356,0,0,0,410,323.534Zm0,46.647a17.324,17.324,0,1,1,17.323-17.324A17.343,17.343,0,0,1,410,370.181Z" />
          <path d="M495.234,325H491V265.854a35.816,35.816,0,0,0-32.153-35.807l-94.434-9.842-31.864-70.613a35.921,35.921,0,0,0-32.674-21.029l-1.875,0V102.19A6.026,6.026,0,0,0,292.167,96H93.5c-3.313,0-6.5,2.877-6.5,6.19V128l-1.576,0H85.3a35.962,35.962,0,0,0-25.561,10.349A35.559,35.559,0,0,0,49,163.7V188H36.766C22.43,188,11,200.055,11,214.391v69.787A25.679,25.679,0,0,0,36.766,310H49v15H45.3a6.624,6.624,0,0,0-6.3,6.4v42a5.7,5.7,0,0,0,1.909,4.04A6.185,6.185,0,0,0,45.3,379H76.755a62.919,62.919,0,0,0,114.307.4l161.874,0a62.919,62.919,0,0,0,114.309-.4h27.989A5.478,5.478,0,0,0,501,373.4v-42a6.368,6.368,0,0,0-1.641-4.441A5.939,5.939,0,0,0,495.234,325ZM49,298H36.766A13.666,13.666,0,0,1,23,284.178V214.391C23,206.671,29.046,200,36.766,200H49ZM238,108h48v20.526l-48-.126Zm-79,0h67v20.369l-67-.176Zm-60,0h48v20.162l-48-.126ZM72.669,367H51V337H73.074a62.8,62.8,0,0,0-.405,30ZM134,403.81a50.953,50.953,0,1,1,50.952-50.953A51.011,51.011,0,0,1,134,403.81ZM348.762,367.4l-153.525,0a62.776,62.776,0,0,0-.21-30l153.947,0a62.777,62.777,0,0,0-.212,30ZM410,403.81a50.953,50.953,0,1,1,50.952-50.953A51.011,51.011,0,0,1,410,403.81ZM466.433,325a62.928,62.928,0,0,0-113.071.4l-162.723,0A62.927,62.927,0,0,0,77.567,325H61V163.7a23.644,23.644,0,0,1,7.21-16.848A24.048,24.048,0,0,1,85.3,140h.083l214.465.563a23.983,23.983,0,0,1,21.793,14.045l33.312,73.716A5.982,5.982,0,0,0,359.8,231.8l97.92,10.261A23.8,23.8,0,0,1,475.414,253H458.833A9.748,9.748,0,0,0,449,262.857V288.19a9.708,9.708,0,0,0,9.833,9.81H479v27Zm12.755-60a3.949,3.949,0,0,0-.188.854V286H461V265ZM489,367H471.331a62.8,62.8,0,0,0-.405-30H489Z" />
        </svg>
      );
    case IconVariant.PLAY:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={24}
          height={24}
          x={0}
          y={0}
          viewBox="0 0 682.667 682.667"
          xmlSpace="preserve"
          className=""
        >
          <g>
            <defs strokeWidth={18} style={{ strokeWidth: 18 }}>
              <clipPath
                id="a"
                clipPathUnits="userSpaceOnUse"
                strokeWidth={18}
                style={{ strokeWidth: 18 }}
              >
                <path
                  d="M0 512h512V0H0Z"
                  fill="#000000"
                  opacity={1}
                  data-original="#000000"
                  className=""
                  strokeWidth={18}
                  style={{ strokeWidth: 18 }}
                />
              </clipPath>
            </defs>
            <g
              clipPath="url(#a)"
              transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
              strokeWidth={18}
              style={{ strokeWidth: 18 }}
            >
              <path
                d="M0 0a34.118 34.118 0 0 0-3.954-1.368c-17.965-5.01-36.59 5.491-41.601 23.456-5.01 17.965 5.492 36.59 23.456 41.601 1.394.388 2.791.684 4.186.889"
                style={{
                  strokeWidth: 18,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="translate(65.969 88.244)"
                fill="none"
                stroke="#000000"
                strokeWidth={18}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeDasharray="none"
                strokeOpacity=""
                data-original="#000000"
              />
              <path
                d="M0 0c.967.368 1.959.695 2.976.979 17.964 5.01 36.59-5.492 41.6-23.457 5.011-17.965-5.491-36.59-23.456-41.601a33.928 33.928 0 0 0-3.373-.759"
                style={{
                  strokeWidth: 18,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="translate(239.273 206.282)"
                fill="none"
                stroke="#000000"
                strokeWidth={18}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeDasharray="none"
                strokeOpacity=""
                data-original="#000000"
              />
              <path
                d="m0 0 27.459-98.456c14.391-51.598 67.885-81.761 119.483-67.37 51.598 14.39 81.76 67.885 67.37 119.483l-17.011 60.992"
                style={{
                  strokeWidth: 18,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="translate(43.112 176.92)"
                fill="none"
                stroke="#000000"
                strokeWidth={18}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeDasharray="none"
                strokeOpacity=""
                data-original="#000000"
              />
              <path
                d="m0 0-16.766-4.676C-29.63-8.264-37.149-21.6-33.562-34.464c0 0-11.936 2.498-24.8-1.09l-5.956-1.661c-15.538-4.334-24.621-20.443-20.288-35.981l10.76-38.582 34.087 9.507c13.221 3.687 27.217.548 38.13-7.776 13.08-9.979 30.513-13.924 47.582-9.163l77.623 21.648L97.259-3.198C92.925 12.34 76.815 21.424 61.277 17.09L32.368 9.027"
                style={{
                  strokeWidth: 18,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="translate(116.583 290.043)"
                fill="none"
                stroke="#000000"
                strokeWidth={18}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeDasharray="none"
                strokeOpacity=""
                data-original="#000000"
              />
              <path
                d="M0 0c5.144-18.441-5.637-37.561-24.078-42.704-18.442-5.143-37.561 5.638-42.704 24.079z"
                style={{
                  strokeWidth: 18,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="translate(212.35 107.32)"
                fill="none"
                stroke="#000000"
                strokeWidth={18}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeDasharray="none"
                strokeOpacity=""
                data-original="#000000"
              />
              <path
                d="M0 0c-2.051 7.351-9.672 11.648-17.023 9.598-7.351-2.05-11.648-9.672-9.598-17.023"
                style={{
                  strokeWidth: 18,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="translate(136.877 119.86)"
                fill="none"
                stroke="#000000"
                strokeWidth={18}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeDasharray="none"
                strokeOpacity=""
                data-original="#000000"
              />
              <path
                d="M0 0c-2.051 7.351-9.672 11.648-17.022 9.598-7.352-2.05-11.649-9.671-9.599-17.023"
                style={{
                  strokeWidth: 18,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="translate(224.731 144.363)"
                fill="none"
                stroke="#000000"
                strokeWidth={18}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeDasharray="none"
                strokeOpacity=""
                data-original="#000000"
              />
              <path
                d="M0 0c-1.475.209-2.953.52-4.427.938-17.504 4.971-27.664 23.19-22.693 40.694 4.972 17.504 23.19 27.664 40.694 22.694a33.133 33.133 0 0 0 5.779-2.241"
                style={{
                  strokeWidth: 18,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="translate(262.02 352.913)"
                fill="none"
                stroke="#000000"
                strokeWidth={18}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeDasharray="none"
                strokeOpacity=""
                data-original="#000000"
              />
              <path
                d="M0 0a33.114 33.114 0 0 0 6.57-1.17c17.504-4.971 27.664-23.19 22.694-40.694-4.971-17.504-23.191-27.664-40.695-22.694a33.258 33.258 0 0 0-4.321 1.557"
                style={{
                  strokeWidth: 18,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="translate(462.31 363.519)"
                fill="none"
                stroke="#000000"
                strokeWidth={18}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeDasharray="none"
                strokeOpacity=""
                data-original="#000000"
              />
              <path
                d="M0 0a94.704 94.704 0 0 0-12.332-8.198c-21.154-11.805-46.81-15.524-71.937-8.388-30.147 8.561-52.709 30.81-62.868 58.093"
                style={{
                  strokeWidth: 18,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="translate(455.295 402.093)"
                fill="none"
                stroke="#000000"
                strokeWidth={18}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeDasharray="none"
                strokeOpacity=""
                data-original="#000000"
              />
              <path
                d="M0 0c18.167 12.042 32.289 30.383 38.71 52.995l15.555 54.774c14.277 50.273-14.904 102.602-65.178 116.879-49.104 13.945-100.16-13.573-115.814-61.706"
                style={{
                  strokeWidth: 18,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="translate(403.783 237.798)"
                fill="none"
                stroke="#000000"
                strokeWidth={18}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeDasharray="none"
                strokeOpacity=""
                data-original="#000000"
              />
              <path
                d="m0 0-7.369-25.95C-21.646-76.223 7.535-128.552 57.809-142.829c16.077-4.565 32.361-4.68 47.547-1.088"
                style={{
                  strokeWidth: 18,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="translate(267.806 368.444)"
                fill="none"
                stroke="#000000"
                strokeWidth={18}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeDasharray="none"
                strokeOpacity=""
                data-original="#000000"
              />
              <path
                d="M0 0c-5.103-17.968-23.805-28.397-41.772-23.295h-.001C-59.741-18.192-70.171.51-65.067 18.479z"
                style={{
                  strokeWidth: 18,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="translate(373.589 299.129)"
                fill="none"
                stroke="#000000"
                strokeWidth={18}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeDasharray="none"
                strokeOpacity=""
                data-original="#000000"
              />
              <path
                d="M0 0c2.033 7.162-2.124 14.617-9.286 16.651-7.162 2.035-14.618-2.123-16.651-9.285"
                style={{
                  strokeWidth: 18,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="translate(318.784 350.017)"
                fill="none"
                stroke="#000000"
                strokeWidth={18}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeDasharray="none"
                strokeOpacity=""
                data-original="#000000"
              />
              <path
                d="M0 0c2.034 7.162-2.124 14.617-9.286 16.651-7.162 2.035-14.617-2.123-16.651-9.285"
                style={{
                  strokeWidth: 18,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="translate(404.384 325.707)"
                fill="none"
                stroke="#000000"
                strokeWidth={18}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeDasharray="none"
                strokeOpacity=""
                data-original="#000000"
              />
              <path
                d="m0 0 3.403 11.85a8.489 8.489 0 0 0 9.386 6.056l58.199-8.508c5.086-.743 8.35-5.801 6.931-10.742l-7.758-27.013c-1.419-4.941-6.869-7.496-11.574-5.428L4.742-10.114A8.49 8.49 0 0 0 0 0Z"
                style={{
                  strokeWidth: 18,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="translate(330.33 111.406)"
                fill="none"
                stroke="#000000"
                strokeWidth={18}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeDasharray="none"
                strokeOpacity=""
                data-original="#000000"
              />
              <path
                d="m0 0-.855 12.299A8.488 8.488 0 0 0 5.894 21.2l57.598 11.911c5.034 1.041 9.831-2.595 10.188-7.723L75.628-2.65c.356-5.128-3.891-9.393-9.02-9.059L7.915-7.881A8.488 8.488 0 0 0 0 0Z"
                style={{
                  strokeWidth: 18,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="translate(324.725 167.93)"
                fill="none"
                stroke="#000000"
                strokeWidth={18}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeDasharray="none"
                strokeOpacity=""
                data-original="#000000"
              />
              <path
                d="m0 0 7.251 9.971a8.487 8.487 0 0 0 10.891 2.48l51.78-27.899c4.524-2.438 5.861-8.307 2.839-12.465l-16.53-22.731c-3.023-4.157-9.018-4.694-12.733-1.141L.997-11.126A8.49 8.49 0 0 0 0 0Z"
                style={{
                  strokeWidth: 18,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="translate(294.47 67.563)"
                fill="none"
                stroke="#000000"
                strokeWidth={18}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeDasharray="none"
                strokeOpacity=""
                data-original="#000000"
              />
              <path
                d="m0 0-6.52-10.464a8.489 8.489 0 0 0-10.686-3.252l-53.641 24.128c-4.688 2.109-6.441 7.867-3.722 12.23l14.862 23.854c2.719 4.362 8.66 5.327 12.619 2.048L-1.79 11.026A8.49 8.49 0 0 0 0 0Z"
                style={{
                  strokeWidth: 18,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="translate(174.249 408.864)"
                fill="none"
                stroke="#000000"
                strokeWidth={18}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeDasharray="none"
                strokeOpacity=""
                data-original="#000000"
              />
              <path
                d="m0 0-2.548-12.063a8.49 8.49 0 0 0-8.93-6.711l-58.658 4.327c-5.126.378-8.742 5.19-7.68 10.219l5.808 27.499c1.062 5.029 6.316 7.968 11.156 6.241L-5.453 9.749A8.488 8.488 0 0 0 0 0Z"
                style={{
                  strokeWidth: 18,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="translate(169.554 352.627)"
                fill="none"
                stroke="#000000"
                strokeWidth={18}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeDasharray="none"
                strokeOpacity=""
                data-original="#000000"
              />
              <path
                d="m0 0-9.705-7.603a8.49 8.49 0 0 0-11.154.599l-42.155 41.019c-3.683 3.585-3.361 9.595.686 12.765l22.125 17.333c4.046 3.17 9.959 2.044 12.557-2.391L2.089 10.974A8.49 8.49 0 0 0 0 0Z"
                style={{
                  strokeWidth: 18,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="translate(224.242 438.58)"
                fill="none"
                stroke="#000000"
                strokeWidth={18}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeDasharray="none"
                strokeOpacity=""
                data-original="#000000"
              />
            </g>
          </g>
        </svg>
      );

    case IconVariant.EATS:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="none"
          stroke="#000000"
          strokeWidth={18}
        >
          <path d="M533-440q-32-45-84.5-62.5T340-520q-56 0-108.5 17.5T147-440h386ZM40-360q0-109 91-174.5T340-600q118 0 209 65.5T640-360H40Zm0 160v-80h600v80H40ZM720-40v-80h56l56-560H450l-10-80h200v-160h80v160h200L854-98q-3 25-22 41.5T788-40h-68Zm0-80h56-56ZM80-40q-17 0-28.5-11.5T40-80v-40h600v40q0 17-11.5 28.5T600-40H80Zm260-400Z" />
        </svg>
      );
    case IconVariant.HEART:
      return (
        <div className="-ml-0.5 h-5 w-5" aria-hidden="true">
          <svg
            version="1.1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              d="M0 0 C12.03567203 12.4787029 23.33708022 29.23927185 27 46.375 C27.66 46.375 28.32 46.375 29 46.375 C29.11214844 45.85035156 29.22429687 45.32570313 29.33984375 44.78515625 C32.86237682 30.94827797 40.92773583 18.23172605 50 7.375 C50.83144531 6.37984375 51.66289062 5.3846875 52.51953125 4.359375 C69.14103072 -14.90848679 91.67763506 -27.27181012 117 -30.625 C118.16208984 -30.80869141 118.16208984 -30.80869141 119.34765625 -30.99609375 C147.67648082 -34.63259896 177.88037582 -27.15417523 200.625 -9.875 C228.08913768 11.72913814 243.86774809 43.50617776 248.03564453 77.92871094 C253.14540068 126.53898369 235.38032396 169.63998028 206 207.375 C204.95199219 208.72851562 204.95199219 208.72851562 203.8828125 210.109375 C189.96153971 227.78534792 174.48755916 244.07017251 158.56591797 259.93945312 C156.60134799 261.89858656 154.64228552 263.86311644 152.68359375 265.828125 C141.58219654 276.93538554 141.58219654 276.93538554 135.62890625 281.99121094 C133.07207041 284.1632951 130.64230905 286.46342262 128.1875 288.75 C123.58474162 293.00306216 118.84253712 297.01733782 113.95703125 300.9453125 C111.1698681 303.23542542 108.4576294 305.58874473 105.75170898 307.97314453 C97.8173944 314.95682769 89.57713497 321.41899108 81.12646484 327.76318359 C79.06280092 329.3273982 77.02256228 330.91735406 74.98828125 332.51953125 C66.70398858 339.01864971 58.1883262 345.07944293 49.4375 350.9375 C48.4261499 351.61659424 47.4147998 352.29568848 46.37280273 352.99536133 C32.18930826 362.38622722 32.18930826 362.38622722 26.953125 362.359375 C23.31704533 361.14734844 20.05762763 359.53211554 16.75 357.625 C16.05962646 357.23086914 15.36925293 356.83673828 14.65795898 356.43066406 C6.00305107 351.36522855 -1.99824774 345.4002585 -10 339.375 C-10.72364746 338.83294922 -11.44729492 338.29089844 -12.19287109 337.73242188 C-25.6137246 327.65996375 -38.66515451 317.13967049 -51.42773438 306.24633789 C-54.65385761 303.4954382 -57.93230171 300.82669157 -61.25 298.1875 C-66.97409711 293.5361473 -72.30011095 288.48640944 -77.63574219 283.39770508 C-81.24016442 279.96066159 -84.87830119 276.58464347 -88.609375 273.28515625 C-94.88299034 267.66427656 -100.81551896 261.70956349 -106.76000977 255.74536133 C-108.69109547 253.80889451 -110.62749882 251.87786044 -112.56445312 249.94726562 C-118.59029749 243.92461543 -124.49534904 237.88420137 -130 231.375 C-131.4132355 229.8301874 -132.82940409 228.28804675 -134.25 226.75 C-139.30058874 221.14393196 -143.94503104 215.2624813 -148.53662109 209.27978516 C-149.52541345 207.99273845 -150.51803257 206.70862402 -151.51416016 205.42724609 C-162.48429786 191.3058518 -171.45342664 176.58843738 -179 160.375 C-179.80244141 158.65990234 -179.80244141 158.65990234 -180.62109375 156.91015625 C-195.8187519 121.81738198 -197.4264536 79.27554329 -183.62280273 43.48730469 C-177.75149704 29.10322789 -170.33163797 16.00330592 -160 4.375 C-158.79923828 3.02341797 -158.79923828 3.02341797 -157.57421875 1.64453125 C-141.13657174 -15.70781297 -117.72385086 -27.64237713 -94 -30.625 C-93.06671875 -30.74746094 -92.1334375 -30.86992188 -91.171875 -30.99609375 C-56.00419562 -34.64812199 -25.69672352 -24.12665895 0 0 Z "
              fill="#FB4F4F"
              transform="translate(228,90.625)"
            />
            <path
              d="M0 0 C25.24286841 5.70191851 46.52083565 25.70606722 60 47 C80.31651107 81.55002976 84.51530679 122.34102528 75 161 C67.70722729 188.08464278 54.09503123 211.04376353 37 233 C35.95199219 234.35351562 35.95199219 234.35351562 34.8828125 235.734375 C20.96153971 253.41034792 5.48755916 269.69517251 -10.43408203 285.56445312 C-12.39865201 287.52358656 -14.35771448 289.48811644 -16.31640625 291.453125 C-27.41780346 302.56038554 -27.41780346 302.56038554 -33.37109375 307.61621094 C-35.92792959 309.7882951 -38.35769095 312.08842262 -40.8125 314.375 C-45.41525838 318.62806216 -50.15746288 322.64233782 -55.04296875 326.5703125 C-57.8301319 328.86042542 -60.5423706 331.21374473 -63.24829102 333.59814453 C-71.1826056 340.58182769 -79.42286503 347.04399108 -87.87353516 353.38818359 C-89.93719908 354.9523982 -91.97743772 356.54235406 -94.01171875 358.14453125 C-102.29601142 364.64364971 -110.8116738 370.70444293 -119.5625 376.5625 C-120.5738501 377.24159424 -121.5852002 377.92068848 -122.62719727 378.62036133 C-136.81069174 388.01122722 -136.81069174 388.01122722 -142.046875 387.984375 C-145.68295467 386.77234844 -148.94237237 385.15711554 -152.25 383.25 C-152.94037354 382.85586914 -153.63074707 382.46173828 -154.34204102 382.05566406 C-162.99694893 376.99022855 -170.99824774 371.0252585 -179 365 C-179.72364746 364.45794922 -180.44729492 363.91589844 -181.19287109 363.35742188 C-194.6137246 353.28496375 -207.66515451 342.76467049 -220.42773438 331.87133789 C-223.65385761 329.1204382 -226.93230171 326.45169157 -230.25 323.8125 C-236.79743083 318.49211331 -242.83977201 312.63973449 -248.94921875 306.828125 C-252.92313391 303.05295182 -256.98393673 299.39726766 -261.1171875 295.796875 C-263.0039712 293.99621006 -264.50161528 292.12977954 -266 290 C-261.95130554 291.27853509 -257.9963853 292.55446186 -254.1171875 294.2890625 C-245.27084493 298.19985697 -236.21774732 300.58014416 -226.8125 302.75 C-224.90658081 303.19037598 -224.90658081 303.19037598 -222.9621582 303.63964844 C-210.53962168 306.43413361 -198.75785959 308.37482493 -186 308.4375 C-184.81921875 308.47037109 -183.6384375 308.50324219 -182.421875 308.53710938 C-173.87933034 308.58885386 -167.60038184 306.82373009 -160 303 C-159.2663623 302.64977783 -158.53272461 302.29955566 -157.77685547 301.9387207 C-155.80594995 300.97877661 -153.86982938 299.9727201 -151.9375 298.9375 C-151.22907959 298.55956299 -150.52065918 298.18162598 -149.79077148 297.79223633 C-140.91780729 292.97454325 -132.44675028 287.52146879 -124 282 C-123.23510254 281.50064941 -122.47020508 281.00129883 -121.68212891 280.48681641 C-110.61485783 273.23698611 -99.73535311 265.73220811 -89 258 C-88.23010742 257.44554199 -87.46021484 256.89108398 -86.66699219 256.31982422 C-76.08253386 248.6697353 -65.78177973 240.75331415 -55.72363281 232.42382812 C-53.28769935 230.41159527 -50.82957525 228.4269225 -48.375 226.4375 C-35.53133273 215.97289078 -35.53133273 215.97289078 -23.55078125 204.5546875 C-21.87603042 202.87571816 -20.11807274 201.34962709 -18.3125 199.8125 C-9.90373931 192.54890127 -2.15946012 184.48754761 5 176 C5.84175781 175.03578125 6.68351562 174.0715625 7.55078125 173.078125 C29.45406184 147.86593662 44.24455979 120.06017454 42 86 C41.54964279 81.93768701 40.86047558 77.99333387 40 74 C39.87882812 73.28457031 39.75765625 72.56914062 39.6328125 71.83203125 C35.01109233 46.69553278 19.31926715 22.08194966 1.765625 4.00390625 C0 2 0 2 0 0 Z "
              fill="#D54242"
              transform="translate(397,65)"
            />
            <path
              d="M0 0 C4.15586214 4.26242271 6.60518609 8.66154108 6.9375 14.6875 C6.11270779 30.22552102 -2.55046181 45.09186086 -12.5625 56.5 C-13.12710938 57.19609375 -13.69171875 57.8921875 -14.2734375 58.609375 C-22.57171699 68.66081213 -36.00519359 79.37293621 -49.453125 80.80859375 C-59.64015266 81.19949132 -59.64015266 81.19949132 -63.75 77.75 C-67.75212945 73.73773858 -68.86784086 70.19792465 -68.9375 64.5625 C-68.61307579 47.48251979 -59.73432991 32.8701285 -48.5625 20.5 C-47.80195312 19.64535156 -47.04140625 18.79070312 -46.2578125 17.91015625 C-34.95966093 5.88966384 -17.18703033 -7.23664435 0 0 Z "
              fill="#FC8282"
              transform="translate(132.5625,91.5)"
            />
          </svg>
        </div>
      );
  }
};

export default Icon;
