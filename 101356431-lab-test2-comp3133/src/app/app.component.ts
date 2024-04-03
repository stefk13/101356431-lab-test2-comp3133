import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MissionListComponent } from './missionlist/missionlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MissionListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101356431-lab-test2-comp3133';
}
