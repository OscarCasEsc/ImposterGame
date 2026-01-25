import { Component } from '@angular/core';
import { Room } from '../components/room/room';

@Component({
  selector: 'app-available-rooms',
  imports: [Room],
  templateUrl: './available-rooms.html',
  styleUrl: './available-rooms.scss',
})
export class AvailableRooms {
  availableRooms: IRoom[] = [
    {
      name: 'Impostores sin fronteras',
      type: 'Pública',
      createdBy: 'Óscar',
      status: 'En espera',
      maxPlayers: 10,
      players: 5,
    },
    {
      name: 'Jugones',
      type: 'Privada',
      createdBy: 'Pepito',
      status: 'En espera',
      maxPlayers: 8,
      players: 5,
    },
    {
      name: 'Mentirosos',
      type: 'Pública',
      createdBy: 'OSX23',
      status: 'En espera',
      maxPlayers: 8,
      players: 8,
    },
  ];
}
