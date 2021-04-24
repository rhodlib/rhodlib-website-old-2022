import { ThemeContext } from "styled-components";
import { useContext } from "react";

const Linkedin = (props) => {
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
          d="M15.465 10.018A3.471 3.471 0 0012 13.484a3.47 3.47 0 003.465 3.465 3.468 3.468 0 003.464-3.465 3.47 3.47 0 00-3.464-3.466zm2.601 8.323h-5.202a.449.449 0 00-.448.449v16.744c0 .247.201.448.448.448h5.202a.448.448 0 00.448-.448V18.79a.447.447 0 00-.448-.449zm13.299-.197c-1.904 0-3.577.58-4.597 1.525v-.879a.449.449 0 00-.449-.449h-4.99a.449.449 0 00-.448.449v16.744c0 .247.201.448.448.448h5.197a.449.449 0 00.449-.448V27.25c0-2.377.437-3.851 2.619-3.851 2.149.003 2.31 1.583 2.31 3.993v8.142c0 .247.201.448.448.448h5.2a.449.449 0 00.448-.448v-9.185c0-3.82-.754-8.205-6.635-8.205z"
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
export default Linkedin;
