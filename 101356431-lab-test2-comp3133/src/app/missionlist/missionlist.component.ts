import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacexApiService } from '../spacex-api.service';
import { MissionDetailsComponent } from '../missiondetails/missiondetails.component'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule,MissionDetailsComponent, FormsModule],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionListComponent {
  missions: any[] = [];
  selectedMission: any = null;
  launchYear: string = '';
  flightNumber: string = '';

  constructor(private spacexDataService: SpacexApiService) {
    this.fetchLaunches(); 
  }

  fetchLaunches(): void {
    this.spacexDataService.getLaunches().subscribe(data => {
      this.missions = data;
    });
  }

  fetchLaunchesByYear(): void {
    if (this.launchYear) {
      this.spacexDataService.getLaunchesByYear(this.launchYear).subscribe(data => {
        this.missions = data;
      });
    } else {
      this.fetchLaunches(); 
    }
  }

  fetchLaunchesByFlightNumber(): void { 
    if (this.flightNumber) {
      this.spacexDataService.getLaunchDetails(this.flightNumber).subscribe(data => {
        this.missions = [data]; 
      });
    } else {
      this.fetchLaunches();
    }
  }


  selectMission(mission: any): void {
    this.selectedMission = mission;
  }
}
