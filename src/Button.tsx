import {Component, createSignal} from 'solid-js';
import {customElement } from 'solid-element';

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button: Component<ButtonProps> = (props) => {

const {label, onClick} = props;
    return (
        <button onClick={onClick}>{label}!</button>
    )
}

// window.customElements.define('solid-button', Button);
customElement('solid-button', {
    "label": "button",
    onClick: () => {}
}, Button);
