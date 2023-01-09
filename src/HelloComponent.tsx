import {Component} from "solid-js";
import { customElement } from "solid-element";
import styles from "./HelloComponent.module.css";

const HelloComponent: Component<Props> = (props) => {
    return (
        <>
            <div style={props["style2"]}>Hello Solid! {props["style2"]}`</div>
        </>)
}


customElement("hello-solid", { style2: "color: blue;" }, HelloComponent)
