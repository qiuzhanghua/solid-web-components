import { customElement } from "solid-element";
import { Component } from "solid-js";
import { Portal } from "solid-js/web";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: Component<ButtonProps> = (props) => {
  const { label, onClick } = props;
  // const [label] = createSignal(props.label);
  // const [onClick] = createSignal(props.onClick);
  return (
    <Portal useShadow={true}>
      <style>@unocss-placeholder</style>
      <button class="bg-blue-400" onClick={onClick}>
        {label}!
      </button>
    </Portal>
  );
};

export default Button;

// window.customElements.define('tj-button', Button);
customElement(
  "tj-button",
  {
    label: "button",
    onClick: () => {}
  },
  Button
);
