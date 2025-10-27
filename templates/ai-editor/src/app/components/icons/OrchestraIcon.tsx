import * as React from "react";

export function OrchestraIcon({
  size = 22,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) {
  const resourcePrefix = React.useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 22 23"
      aria-hidden="true"
      stroke="transparent"
      {...props}
    >
      <path
        fill={`url(#${resourcePrefix}-faulta)`}
        fillRule="evenodd"
        d="M14.86 17c.175-.783.664-1.472 1.253-2.037 1.32-1.268 2.137-3.023 2.137-4.963 0-3.866-3.246-7-7.25-7s-7.25 3.134-7.25 7c0 1.94.817 3.695 2.137 4.963.589.565 1.078 1.254 1.253 2.037zm-7.568 1.5h7.416l-.055.666A2 2 0 0 1 12.66 21H9.34a2 2 0 0 1-1.993-1.834z"
        clipRule="evenodd"
      />
      <g filter={`url(#${resourcePrefix}-faultb)`}>
        <path
          fill="#fff"
          d="M14.507 10.61a3.84 3.84 0 0 0-2.855 2.828l-.018.074c-.158.652-1.09.65-1.246-.002l-.012-.052a3.84 3.84 0 0 0-2.847-2.836l-.037-.009c-.656-.156-.656-1.085 0-1.242l.037-.008a3.84 3.84 0 0 0 2.847-2.836l.008-.037c.157-.653 1.09-.653 1.247 0l.009.037a3.84 3.84 0 0 0 2.846 2.836l.022.005c.657.156.656 1.087-.001 1.242"
        />
      </g>
      <defs>
        <radialGradient
          id={`${resourcePrefix}-faulta`}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 9 -10.0074 0 11 10)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.345} stopColor="#03D2B0" />
          <stop offset={0.893} stopColor="#02927F" />
        </radialGradient>
        <filter
          id={`${resourcePrefix}-faultb`}
          width={20}
          height={20}
          x={1}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={3} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.00392157 0 0 0 0 0.513726 0 0 0 0 0.454902 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_5231_3846"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_5231_3846"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
