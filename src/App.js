import { darkTheme, lightTheme } from "./config/theme";
import styled, { ThemeProvider, css } from "styled-components";

import GlobalStyle from "./config/globalStyles";
import IconList from "./components/IconList";
import LogoComponent from "./components/LogoComponent";
import ToggleButton from "./components/ToggleButton";
import { useState } from "react";

const AppWrapper = styled.main`
  ${({ theme }) =>
    css`
      background-image: linear-gradient(
          161deg,
          rgba(121, 121, 121, 0.02) 0%,
          rgba(121, 121, 121, 0.02) 16.667%,
          rgba(193, 193, 193, 0.02) 16.667%,
          rgba(193, 193, 193, 0.02) 33.334%,
          rgba(177, 177, 177, 0.02) 33.334%,
          rgba(177, 177, 177, 0.02) 50.001000000000005%,
          rgba(5, 5, 5, 0.02) 50.001%,
          rgba(5, 5, 5, 0.02) 66.668%,
          rgba(229, 229, 229, 0.02) 66.668%,
          rgba(229, 229, 229, 0.02) 83.33500000000001%,
          rgba(211, 211, 211, 0.02) 83.335%,
          rgba(211, 211, 211, 0.02) 100.002%
        ),
        linear-gradient(
          45deg,
          rgba(223, 223, 223, 0.02) 0%,
          rgba(223, 223, 223, 0.02) 14.286%,
          rgba(70, 70, 70, 0.02) 14.286%,
          rgba(70, 70, 70, 0.02) 28.572%,
          rgba(109, 109, 109, 0.02) 28.572%,
          rgba(109, 109, 109, 0.02) 42.858%,
          rgba(19, 19, 19, 0.02) 42.858%,
          rgba(19, 19, 19, 0.02) 57.144%,
          rgba(180, 180, 180, 0.02) 57.144%,
          rgba(180, 180, 180, 0.02) 71.42999999999999%,
          rgba(63, 63, 63, 0.02) 71.43%,
          rgba(63, 63, 63, 0.02) 85.71600000000001%,
          rgba(87, 87, 87, 0.02) 85.716%,
          rgba(87, 87, 87, 0.02) 100.002%
        ),
        linear-gradient(
          337deg,
          rgba(142, 142, 142, 0.02) 0%,
          rgba(142, 142, 142, 0.02) 20%,
          rgba(164, 164, 164, 0.02) 20%,
          rgba(164, 164, 164, 0.02) 40%,
          rgba(203, 203, 203, 0.02) 40%,
          rgba(203, 203, 203, 0.02) 60%,
          rgba(228, 228, 228, 0.02) 60%,
          rgba(228, 228, 228, 0.02) 80%,
          rgba(54, 54, 54, 0.02) 80%,
          rgba(54, 54, 54, 0.02) 100%
        ),
        linear-gradient(
          314deg,
          rgba(187, 187, 187, 0.02) 0%,
          rgba(187, 187, 187, 0.02) 12.5%,
          rgba(170, 170, 170, 0.02) 12.5%,
          rgba(170, 170, 170, 0.02) 25%,
          rgba(214, 214, 214, 0.02) 25%,
          rgba(214, 214, 214, 0.02) 37.5%,
          rgba(187, 187, 187, 0.02) 37.5%,
          rgba(187, 187, 187, 0.02) 50%,
          rgba(190, 190, 190, 0.02) 50%,
          rgba(190, 190, 190, 0.02) 62.5%,
          rgba(6, 6, 6, 0.02) 62.5%,
          rgba(6, 6, 6, 0.02) 75%,
          rgba(206, 206, 206, 0.02) 75%,
          rgba(206, 206, 206, 0.02) 87.5%,
          rgba(171, 171, 171, 0.02) 87.5%,
          rgba(171, 171, 171, 0.02) 100%
        ),
        linear-gradient(
          300deg,
          rgba(243, 243, 243, 0.01) 0%,
          rgba(243, 243, 243, 0.01) 12.5%,
          rgba(209, 209, 209, 0.01) 12.5%,
          rgba(209, 209, 209, 0.01) 25%,
          rgba(179, 179, 179, 0.01) 25%,
          rgba(179, 179, 179, 0.01) 37.5%,
          rgba(3, 3, 3, 0.01) 37.5%,
          rgba(3, 3, 3, 0.01) 50%,
          rgba(211, 211, 211, 0.01) 50%,
          rgba(211, 211, 211, 0.01) 62.5%,
          rgba(151, 151, 151, 0.01) 62.5%,
          rgba(151, 151, 151, 0.01) 75%,
          rgba(16, 16, 16, 0.01) 75%,
          rgba(16, 16, 16, 0.01) 87.5%,
          rgba(242, 242, 242, 0.01) 87.5%,
          rgba(242, 242, 242, 0.01) 100%
        ),
        linear-gradient(
          6deg,
          rgba(31, 31, 31, 0.02) 0%,
          rgba(31, 31, 31, 0.02) 20%,
          rgba(193, 193, 193, 0.02) 20%,
          rgba(193, 193, 193, 0.02) 40%,
          rgba(139, 139, 139, 0.02) 40%,
          rgba(139, 139, 139, 0.02) 60%,
          rgba(14, 14, 14, 0.02) 60%,
          rgba(14, 14, 14, 0.02) 80%,
          rgba(122, 122, 122, 0.02) 80%,
          rgba(122, 122, 122, 0.02) 100%
        ),
        linear-gradient(
          279deg,
          rgba(190, 190, 190, 0.02) 0%,
          rgba(190, 190, 190, 0.02) 14.286%,
          rgba(160, 160, 160, 0.02) 14.286%,
          rgba(160, 160, 160, 0.02) 28.572%,
          rgba(23, 23, 23, 0.02) 28.572%,
          rgba(23, 23, 23, 0.02) 42.858%,
          rgba(60, 60, 60, 0.02) 42.858%,
          rgba(60, 60, 60, 0.02) 57.144%,
          rgba(149, 149, 149, 0.02) 57.144%,
          rgba(149, 149, 149, 0.02) 71.42999999999999%,
          rgba(4, 4, 4, 0.02) 71.43%,
          rgba(4, 4, 4, 0.02) 85.71600000000001%,
          rgba(50, 50, 50, 0.02) 85.716%,
          rgba(50, 50, 50, 0.02) 100.002%
        ),
        linear-gradient(
          109deg,
          rgba(124, 124, 124, 0.03) 0%,
          rgba(124, 124, 124, 0.03) 12.5%,
          rgba(61, 61, 61, 0.03) 12.5%,
          rgba(61, 61, 61, 0.03) 25%,
          rgba(187, 187, 187, 0.03) 25%,
          rgba(187, 187, 187, 0.03) 37.5%,
          rgba(207, 207, 207, 0.03) 37.5%,
          rgba(207, 207, 207, 0.03) 50%,
          rgba(206, 206, 206, 0.03) 50%,
          rgba(206, 206, 206, 0.03) 62.5%,
          rgba(118, 118, 118, 0.03) 62.5%,
          rgba(118, 118, 118, 0.03) 75%,
          rgba(89, 89, 89, 0.03) 75%,
          rgba(89, 89, 89, 0.03) 87.5%,
          rgba(96, 96, 96, 0.03) 87.5%,
          rgba(96, 96, 96, 0.03) 100%
        ),
        linear-gradient(
          329deg,
          rgba(35, 35, 35, 0.02) 0%,
          rgba(35, 35, 35, 0.02) 20%,
          rgba(246, 246, 246, 0.02) 20%,
          rgba(246, 246, 246, 0.02) 40%,
          rgba(118, 118, 118, 0.02) 40%,
          rgba(118, 118, 118, 0.02) 60%,
          rgba(245, 245, 245, 0.02) 60%,
          rgba(245, 245, 245, 0.02) 80%,
          rgba(140, 140, 140, 0.02) 80%,
          rgba(140, 140, 140, 0.02) 100%
        ),
        linear-gradient(90deg, ${theme.dark}, ${theme.dark});
    `};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 768px) and (orientation: landscape) {
    flex-direction: row;
  }
`;

const LogoBox = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  @media (max-height: 420px) and (orientation: landscape) {
    align-items: flex-end;
  }
  @media (max-height: 550px) and (max-width: 730px) and (orientation: landscape) {
    align-items: flex-end;
  }
`;

const IconsBox = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  @media (max-height: 420px) and (orientation: landscape) {
    align-items: flex-start;
  }
  @media (max-height: 550px) and (max-width: 730px) and (orientation: landscape) {
    align-items: flex-start;
  }
`;

const IconGrid = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(5, 100px);
  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: repeat(5, 80px);
  }
  @media (max-width: 768px) {
    transform: rotate(90deg);
  }
  @media (max-width: 520px) {
    transform: rotate(90deg);
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: repeat(5, 80px);
  }
  @media (max-width: 480px) {
    transform: rotate(90deg);
    grid-template-columns: repeat(4, 60px);
    grid-template-rows: repeat(5, 60px);
  }
  @media (max-height: 420px) and (orientation: landscape) {
    transform: rotate(0deg);
    grid-template-columns: repeat(4, 60px);
    grid-template-rows: repeat(5, 60px);
  }
  @media (max-height: 730px) and (max-width: 550px) {
    grid-template-columns: repeat(4, 60px);
    grid-template-rows: repeat(5, 60px);
  }
  @media (max-height: 550px) and (max-width: 730px) and (orientation: landscape) {
    transform: rotate(0deg);
    grid-template-columns: repeat(4, 60px);
    grid-template-rows: repeat(5, 60px);
  }
  @media (max-width: 300px) {
    grid-template-columns: repeat(4, 50px);
    grid-template-rows: repeat(5, 50px);
  }
  @media (max-width: 660px) and (orientation: landscape) {
    grid-template-columns: repeat(4, 50px);
    grid-template-rows: repeat(5, 50px);
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  height: 70px;
  width: 100%;
  @media (max-width: 480px) {
    height: 50px;
  }
  @media (max-height: 420px) and (orientation: landscape) {
    display: none;
  }
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
  @media (max-height: 730px) and (max-width: 550px) {
    font-size: 1rem;
  }
`;

const App = () => {
  const [theme, setTheme] = useState(true);
  const [mouseState, setMouseState] = useState("");

  const toogleTheme = () => {
    setTheme(!theme);
  };

  const handleOnMouseOver = (name) => {
    setMouseState(name);
  };

  const handleOnMouseLeave = () => {
    setMouseState("");
  };

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ToggleButton onChange={toogleTheme} checked={!theme} />
      <AppWrapper>
        <LogoBox>
          <LogoComponent mouseState={mouseState} />
        </LogoBox>
        <IconsBox>
          <IconGrid>
            <IconList
              onMouseOver={handleOnMouseOver}
              onMouseLeave={handleOnMouseLeave}
            />
          </IconGrid>
        </IconsBox>
      </AppWrapper>
      <Footer>
        <FooterText>Rhodlib Web Developer</FooterText>
      </Footer>
    </ThemeProvider>
  );
};

export default App;
