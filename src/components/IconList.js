import IconCircle from "./IconCircle";
import { data } from "../data";

const IconList = ({
  onMouseOver,
  onMouseLeave,
  handleActivateAnimation,
  props,
}) => {
  return (
    data &&
    data.map((obj, index) => (
      <IconCircle
        style={{ gridRow: obj["grid-row"], gridColumn: obj["grid-column"] }}
        component={obj.component}
        key={index}
        url={obj.url}
        name={obj.name}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        handleActivateAnimation={handleActivateAnimation}
        {...props}
      ></IconCircle>
    ))
  );
};

export default IconList;
