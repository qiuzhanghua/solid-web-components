import {Component} from "solid-js";
import { customElement } from "solid-element";

const HelloComponent: Component<Props> = (props) => {
    return (
        <>
            <div style={props["style2"]}>Hello Solid! {props["style2"]}`</div>
            <div style="color: var(--color)">test</div>
        </>)
}


customElement("hello-solid", { style2: "color: blue;" }, HelloComponent)
