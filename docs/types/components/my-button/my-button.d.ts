import { EventEmitter } from '../../stencil-public-runtime';
export declare class MyButton {
    buttonClicked: EventEmitter;
    label: string;
    size?: 'small' | 'large';
    variant?: 'primary' | 'secondary' | 'tertiary';
    disabled?: boolean;
    handleClick(event: UIEvent): void;
    render(): any;
    getCssClassMap(): string;
}
