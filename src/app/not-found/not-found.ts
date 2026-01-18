import { Component } from '@angular/core';
import { Button } from "../components/button/button";
import { BUTTON_TYPE } from '../constants/constants';

@Component({
  selector: 'app-not-found',
  imports: [Button],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {
  BUTTON_TYPE=BUTTON_TYPE;

}
