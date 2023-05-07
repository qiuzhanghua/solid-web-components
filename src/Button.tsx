import {createSignal} from 'solid-js';
import {customElement } from 'solid-element';

interface ButtonProps {
    label: string;
    onClick: () => void;
}

function Button(props: ButtonProps) {
    const [classes] = createSignal('button');
    const {label, onClick} = props;

    return {
        classes,
        label,
        onClick,
    };
}

customElement('solid-button', {
    "label": "button",
    onClick: () => {}
}, Button);
