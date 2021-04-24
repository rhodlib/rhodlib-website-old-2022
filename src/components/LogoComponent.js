import styled, { css } from "styled-components";

import Logo from "../icons/Logo";

const CardInner = styled.div`
  cursor: pointer;
  position: relative;
  transition: transform 200ms ease-in-out;
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
`;

const CardFront = styled.div`
  backface-visibility: hidden;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  width: 300px;
  height: 300px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
  @media (max-height: 420px) and (orientation: landscape) {
    width: 200px;
    height: 200px;
  }
  @media (max-height: 730px) and (max-width: 550px) {
    width: 200px;
    height: 200px;
  }
  @media (max-height: 550px) and (max-width: 730px) and (orientation: landscape) {
    width: 200px;
    height: 200px;
  }
`;

const CardBack = styled.div`
  backface-visibility: hidden;
  transform: rotateY(180deg);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 300px;
  height: 300px;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
  @media (max-height: 420px) and (orientation: landscape) {
    width: 200px;
    height: 200px;
  }
  @media (max-height: 730px) and (max-width: 550px) {
    width: 200px;
    height: 200px;
  }
  @media (max-height: 550px) and (max-width: 730px) and (orientation: landscape) {
    width: 200px;
    height: 200px;
  }
`;

const Card = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: flex-end;
  perspective: 1000px;
  ${CardInner} {
    ${({ showLinkName }) =>
      showLinkName &&
      css`
        transform: rotateY(180deg);
      `}
  }
  width: 100%;
  border-radius: 50%;
  @media (max-width: 768px) {
    justify-content: center;
    margin-right: 0px;
  }
  @media (max-width: 768px) and (orientation: landscape) {
    justify-content: flex-end;
    margin-right: 20px;
  }
`;

const CustomCircleLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  color: ${({ theme, name }) => theme.icons.Dev};
  border: 25px solid ${({ theme, name }) => theme.icons.Dev || theme.primary};
  border-radius: 50%;
  width: 100%;
  height: 100%;
  font-weight: 600;
  font-size: 36px;
  @media (max-width: 480px) {
    border: 16px solid ${({ theme, name }) => theme.icons.Dev || theme.primary};
    font-size: 26px;
  }
  @media (max-height: 420px) and (orientation: landscape) {
    border: 16px solid ${({ theme, name }) => theme.icons.Dev || theme.primary};
    font-size: 26px;
  }
  @media (max-height: 730px) and (max-width: 550px) {
    border: 16px solid ${({ theme, name }) => theme.icons.Dev || theme.primary};
    font-size: 26px;
  }
  @media (max-height: 550px) and (max-width: 730px) and (orientation: landscape) {
    border: 16px solid ${({ theme, name }) => theme.icons.Dev || theme.primary};
    font-size: 26px;
  }
`;

const LogoComponent = ({ mouseState }) => {
  return (
    <Card showLinkName={mouseState && true}>
      <CardInner>
        <CardFront>
          <Logo />
        </CardFront>
        <CardBack>
          <CustomCircleLogo name={mouseState}>{mouseState}</CustomCircleLogo>
        </CardBack>
      </CardInner>
    </Card>
  );
};

export default LogoComponent;
