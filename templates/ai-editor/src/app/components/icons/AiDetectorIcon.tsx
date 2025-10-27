import * as React from "react";

export default function AiDetectorIcon({
  size = 20,
  ...props
}: {
  size?: number;
} & React.SVGProps<SVGSVGElement>) {
  const resourcePrefix = React.useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 20"
      aria-hidden="true"
      stroke="transparent"
      {...props}
    >
      <g clipPath={`url(#${resourcePrefix}-clip0)`}>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.018 2.918a6.1 6.1 0 0 1 5.186 9.31.53.53 0 0 0 .077.669l2.448 2.272a1.105 1.105 0 1 1-1.56 1.561L12.9 14.28a.53.53 0 0 0-.67-.078A6.1 6.1 0 1 1 9.018 2.918m.261 2.94c-.073-.232-.455-.232-.527.001-.22.706-.53 1.374-1.03 1.865-.497.49-1.161.805-1.865 1.026-.232.073-.232.455.001.527.707.219 1.374.53 1.865 1.03.49.498.805 1.167 1.026 1.87.073.233.454.232.526 0 .219-.709.53-1.379 1.03-1.87.499-.491 1.168-.806 1.872-1.027.232-.073.232-.454-.001-.526-.709-.219-1.379-.53-1.87-1.03-.491-.499-.806-1.163-1.027-1.866"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id={`${resourcePrefix}-clip0`}>
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
