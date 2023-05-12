import { customElement } from "solid-element";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

function Button (props: ButtonProps) {
  const { label, onClick } = props;
  // const [label] = createSignal(props.label);
  // const [onClick] = createSignal(props.onClick);
  return <button onClick={onClick}>{label}!</button>;
}

// window.customElements.define('solid-button', Button);
customElement(
  "solid-button",
  {
    label: "button",
    onClick: () => {}
  },
  Button
);
