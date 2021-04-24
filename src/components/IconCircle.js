import styled, { css } from "styled-components";

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${({ theme, iconName }) =>
    css`
      background-image: linear-gradient(
        45deg,
        ${theme.icons[iconName]} 50%,
        ${theme.primary} 50%
      );
      background-size: 250% 100%;
      background-position: right bottom;
      transition: background-position 200ms ease;
    `};
  border-radius: 50%;
  align-self: center;
  justify-self: center;
  outline: none;
  &:hover,
  :focus {
    transform: scale(1.2);
    background-position: left top;
    transition: 200ms;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    transform: rotate(-90deg);
    &:hover {
      transform: scale(1.2) rotate(-90deg);
    }
    &:focus {
      transform: rotate(-90deg);
    }
  }
  @media (max-height: 420px) and (orientation: landscape) {
    transform: rotate(0deg);
    &:hover {
      transform: scale(1.2) rotate(0deg);
    }
    &:focus {
      transform: rotate(0deg);
    }
  }

  @media (max-height: 550px) and (max-width: 730px) and (orientation: landscape) {
    transform: rotate(0deg);
    &:hover {
      transform: scale(1.2) rotate(0deg);
    }
    &:focus {
      transform: rotate(0deg);
    }
  }
`;

const IconCircle = ({
  onMouseOver,
  onMouseLeave,
  url,
  style,
  component: CustomComponent,
  name,
  ...props
}) => {
  return (
    CustomComponent && (
      <Link
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        iconName={name}
        title={name}
        style={style}
        {...props}
        onMouseOver={() => onMouseOver(name)}
        onMouseLeave={() => onMouseLeave()}
        onFocus={() => onMouseOver(name)}
        onBlur={() => onMouseLeave()}
      >
        <CustomComponent width={"80%"} height={"80%"} />
      </Link>
    )
  );
};

export default IconCircle;
