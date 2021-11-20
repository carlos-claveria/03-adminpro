import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css'  ]
})
export class ProgressComponent implements OnInit {

  progreso1 = 60;
  progreso2 = 40;

  get progresotpc1() {
    return `${this.progreso1}%`;
  }

  get progresotpc2() {
    return `${this.progreso2}%`;
  }

  constructor() { }

  ngOnInit(): void {
  }

  

  
}
