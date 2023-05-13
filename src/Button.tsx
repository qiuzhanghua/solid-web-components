import { customElement } from "solid-element";
import { Component } from "solid-js";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: Component<ButtonProps> = (props) => {
        const {label, onClick} = props;
        // const [label] = createSignal(props.label);
        // const [onClick] = createSignal(props.onClick);
        return <button onClick={onClick}>{label}!</button>;
}

export default Button;

// window.customElements.define('solid-button', Button);
customElement(
  "solid-button",
  {
    label: "button",
    onClick: () => {}
  },
  Button
);
