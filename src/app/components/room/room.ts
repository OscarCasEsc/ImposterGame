import { Component, input } from '@angular/core';
import { Button } from '../button/button';
import { BUTTON_TYPE } from '../../constants/constants';

@Component({
  selector: 'app-room',
  imports: [Button],
  templateUrl: './room.html',
  styleUrl: './room.scss',
})
export class Room {
  room = input.required<IRoom>();
  BUTTON_TYPE = BUTTON_TYPE;
}
