import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Event() buttonClicked: EventEmitter;
  @Prop() label: string;
  @Prop() size?: 'small' | 'large' = 'large';
  @Prop() variant?: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Prop() disabled?: boolean = false;
  
  handleClick(event: UIEvent) {
    this.buttonClicked.emit(event);
  }

  render() {  
    return <button class={this.getCssClassMap()} onClick={this.handleClick.bind(this)}>{this.label}</button>;
  }

  getCssClassMap() {
    return classNames(
      'button',
      this.size && `button--size-${this.size}`,
      this.variant && `button--variant-${this.variant}`,
      this.disabled && `button--disabled`
    );
  }

}

