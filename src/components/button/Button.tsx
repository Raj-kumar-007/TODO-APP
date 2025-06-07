import type { FC } from "react";

type buttonProps = {
    name: string,
    handler: () => void
}

const Button:FC<buttonProps> = (props) => {
    return (
    <button className="button-styles" onClick={props.handler}>{props.name}</button>
    );
}

export default Button;