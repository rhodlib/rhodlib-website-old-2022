import { ThemeContext } from "styled-components";
import { useContext } from "react";

const Instagram = (props) => {
  const colors = useContext(ThemeContext);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        isolation: "isolate",
      }}
      viewBox="0 0 48 48"
      {...props}
    >
      <defs>
        <clipPath id="prefix__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)">
        <mask id="prefix__b">
          <path
            d="M0 24C0 10.754 10.754 0 24 0s24 10.754 24 24-10.754 24-24 24S0 37.246 0 24z"
            fill="#FFF"
          />
        </mask>
        <path
          d="M0 24C0 10.754 10.754 0 24 0s24 10.754 24 24-10.754 24-24 24S0 37.246 0 24z"
          fill="none"
        />
        <path
          d="M0 24C0 10.754 10.754 0 24 0s24 10.754 24 24-10.754 24-24 24S0 37.246 0 24z"
          fill="none"
          mask="url(#prefix__b)"
          vectorEffect="non-scaling-stroke"
          strokeWidth={8}
          stroke={colors.dark}
          strokeLinecap="square"
          strokeMiterlimit={3}
        />
        <path
          d="M17 8h14c4.967 0 9 4.033 9 9v14c0 4.967-4.033 9-9 9H17c-4.967 0-9-4.033-9-9V17c0-4.967 4.033-9 9-9zm.412 16A6.591 6.591 0 0124 17.412 6.591 6.591 0 0130.588 24 6.591 6.591 0 0124 30.588 6.591 6.591 0 0117.412 24zm13.176-8.471c0-1.038.844-1.882 1.883-1.882 1.038 0 1.882.844 1.882 1.882a1.884 1.884 0 01-1.882 1.883 1.884 1.884 0 01-1.883-1.883z"
          fillRule="evenodd"
          fill={colors.dark}
        />
      </g>
    </svg>
  );
};

export default Instagram;
