import { ThemeContext } from "styled-components";
import { useContext } from "react";

const Gitlab = (props) => {
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
        <path
          d="M10.962 20.499h26.076l-6.519 9.751L24 40l-6.519-9.75-6.519-9.751zM16.063 8l3.968 16L24 40l-8-6.259-8-6.259 4.031-9.741L16.063 8zm15.874 0l-3.968 16L24 40l8-6.259 8-6.259-4.031-9.741L31.937 8z"
          fillRule="evenodd"
          fill={colors.dark}
        />
        <mask id="prefix__b">
          <path
            d="M0 24C0 10.754 10.754 0 24 0s24 10.754 24 24-10.754 24-24 24S0 37.246 0 24z"
            fill="#fff"
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
      </g>
    </svg>
  );
};

export default Gitlab;
