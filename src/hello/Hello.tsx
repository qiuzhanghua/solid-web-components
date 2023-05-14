import { Component } from "solid-js";
import { customElement } from "solid-element";
import { Portal } from "solid-js/web";

interface HelloProps {
  style2: string;
}

const Hello: Component<HelloProps> = (props) => {
  return (
    <Portal useShadow={true}>
      <style>
        {`:host {
            --color: red;
            }`}
        @unocss-placeholder
      </style>
      <div style={props.style2}>Hello Solid Web Components!</div>
      <div style={{ color: "var(--color)" }}>Use CSS Variable</div>
      <div class="text-purple-600">Use UnoCSS color</div>
    </Portal>
  );
};

export default Hello;

customElement("tj-hello", { style2: "color: blue;" }, Hello);
