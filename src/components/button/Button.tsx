import type { FC } from "react";
import "./ButtoStyles.css";

type buttonProps = {
  name: string;
  handler: () => void;
};

const Button: FC<buttonProps> = (props) => {
  return (
    <button className="button-styles" onClick={props.handler}>
      {props.name}
    </button>
  );
};

export default Button;
