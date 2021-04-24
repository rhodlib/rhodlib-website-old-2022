import { ThemeContext } from "styled-components";
import { useContext } from "react";

const Blog = (props) => {
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
        <path
          d="M37.378 12.423A2.629 2.629 0 0140 15.044v.76l-3.643 2.602-12.401 8.543-12.401-8.629v17.257h-.933A2.629 2.629 0 018 32.956V15.045a2.63 2.63 0 012.622-2.622l13.334 9.887 13.421-9.887h.001z"
          fill={colors.dark}
        />
        <path
          d="M39.996 15.333L40 32.896c-.062 1.952-.889 2.649-3.639 2.681l-.007-17.581 3.642-2.664v.001z"
          fill={colors.dark}
        />
      </g>
    </svg>
  );
};
export default Blog;
