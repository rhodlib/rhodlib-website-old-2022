import { ThemeContext } from "styled-components";
import { useContext } from "react";

const Devto = (props) => {
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
          d="M16.983 20.629c-.001-1.784-1.131-4.482-4.491-4.482H8v15.686h4.399c3.484.006 4.585-2.696 4.585-4.48l-.001-6.724zm-2.678 6.707c0 .551-.184.963-.551 1.238-.368.275-.737.412-1.105.412h-1.654v-9.904h1.653c.368 0 .737.138 1.105.412.367.275.551.689.552 1.238v6.604zm12.223-8.388h-5.051v3.643h3.088v2.803h-3.088v3.641h5.052v2.804h-5.895a1.917 1.917 0 01-1.964-1.867V18.111a1.916 1.916 0 011.869-1.961h5.99l-.001 2.798zm9.826 10.93c-1.252 2.916-3.494 2.335-4.498 0l-3.652-13.727h3.087l2.817 10.781 2.804-10.781H40l-3.646 13.727z"
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
export default Devto;
