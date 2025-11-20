import * as React from "react";

export default function SettingsIcon({
  size = 16,
  ...props
}: {
  size?: number;
} & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
      aria-hidden="true"
      stroke="transparent"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        d="m11.714 3.143-.028.029C10.642 4.215 8.857 3.476 8.857 2H7.143c0 1.476-1.785 2.215-2.829 1.172l-.028-.03-1.143 1.144.029.028C4.215 5.358 3.476 7.143 2 7.143v1.714c1.476 0 2.215 1.785 1.172 2.829l-.03.028 1.144 1.143.028-.029c1.044-1.043 2.829-.304 2.829 1.172h1.714c0-1.476 1.785-2.215 2.829-1.172l.028.03 1.143-1.144-.029-.028c-1.043-1.044-.304-2.829 1.172-2.829V7.143c-1.476 0-2.215-1.785-1.172-2.829l.03-.028z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
    </svg>
  );
}
