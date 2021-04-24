import styled from "styled-components";

const Label = styled.label`
  position: absolute;
  right: 0;
  margin: 10px;
  display: inline-block;
  width: 60px;
  height: 34px;
  outline: none;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.primary};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    background-color: ${({ theme }) => theme.dark};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Input = styled.input`
  &:checked + ${Slider} {
    background-color: ${({ theme }) => theme.primary};
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + ${Slider}:before {
    transform: translateX(22px);
  }
`;

const ToggleButton = (props) => {
  return (
    <Label aria-label="change theme">
      <Input type="checkbox" {...props} />
      <Slider className="round"></Slider>
    </Label>
  );
};

export default ToggleButton;
