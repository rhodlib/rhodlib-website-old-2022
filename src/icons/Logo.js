import { ThemeContext } from "styled-components";
import { useContext } from "react";

const Logo = (props) => {
  const colors = useContext(ThemeContext);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        d="M0 8a8 8 0 1116 0A8 8 0 010 8zm2.3.5h5.53l3.86 3.87c-.7.6-1.51 1-2.22 1.17a.28.28 0 00-.2.26v.82a6.74 6.74 0 10-2.53 0v-.82c0-.12-.1-.24-.2-.26a5.55 5.55 0 01-2.58-1.5A5.67 5.67 0 012.3 8.51zm11.4-1H2.3a5.67 5.67 0 011.66-3.54 5.67 5.67 0 018.08 0A5.67 5.67 0 0113.7 7.5zm0 1H9.18l3.19 3.2a5.65 5.65 0 001.33-3.2z"
        fill={colors.primary}
      />
    </svg>
  );
};

export default Logo;
