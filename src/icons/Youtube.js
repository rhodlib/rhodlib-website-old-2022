import { ThemeContext } from "styled-components";
import { useContext } from "react";

const Youtube = (props) => {
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
          d="M39.341 16.303a4.008 4.008 0 00-2.821-2.82c-2.504-.686-12.52-.686-12.52-.686s-10.016 0-12.521.659c-1.344.369-2.451 1.476-2.82 2.847C8 18.807 8 24 8 24s0 5.219.659 7.697a4.009 4.009 0 002.82 2.82c2.531.686 12.521.686 12.521.686s10.016 0 12.52-.659a4.01 4.01 0 002.821-2.821C40 29.219 40 24.026 40 24.026s.026-5.219-.659-7.723zM29.14 24l-8.33-4.797v9.594L29.14 24z"
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

export default Youtube;
