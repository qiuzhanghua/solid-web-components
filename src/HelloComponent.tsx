import { Component } from "solid-js";
import { customElement } from "solid-element";

interface HelloProps {
  style2: string;
}
const HelloComponent: Component<HelloProps> = (props) => {
  return (
    <>
      <div style={props.style2}>Hello Solid! {props.style2}</div>
      <div style={{ color: "var(--color)" }}>test</div>
      <div class="text-red-600">Purple</div>
    </>
  );
};

customElement("hello-solid", { style2: "color: blue;" }, HelloComponent);
