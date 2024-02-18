import React from "react";

interface zero {
  className?: string;
}

const Zero = ({ className, ...rest }: zero) => {
  return (
    <>
      <svg
        className={className}
        {...rest}
        width="500"
        height="500"
        viewBox="0 0 625 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="312.5"
          cy="350"
          rx="312.5"
          ry="350"
          fill="url(#paint0_radial_16_8)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_16_8"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(312.5 350) rotate(90) scale(350 312.5)"
          >
            <stop stop-color="#763CAC" />
            <stop offset="1" stop-color="#320F85" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </>
  );
};

export default Zero;
