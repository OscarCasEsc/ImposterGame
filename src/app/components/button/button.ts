import { Component, Input } from '@angular/core';
import { BUTTON_TYPE } from '../../constants/constants';
@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input({ required: true }) buttonText!: string;
  @Input({required: true}) buttonType!: string;

  BUTTON_TYPE=BUTTON_TYPE
  constructor(){
    
  }
}
