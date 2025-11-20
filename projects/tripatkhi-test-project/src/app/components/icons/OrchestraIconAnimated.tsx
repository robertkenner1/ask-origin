import * as React from "react";

export function OrchestraIconAnimated({
  size = 24,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) {
  const resourcePrefix = React.useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
      stroke="transparent"
      {...props}
    >
      <path
        fill="#C2C6D4"
        fillRule="evenodd"
        d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0"
        clipRule="evenodd"
      />
      <path
        fill="#05735A"
        fillRule="evenodd"
        d="M17 11a1 1 0 0 1 1 1 6 6 0 0 1-7.553 5.796 1 1 0 0 1 .518-1.932A4 4 0 0 0 16 12a1 1 0 0 1 1-1"
        clipRule="evenodd"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}
