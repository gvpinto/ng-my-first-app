import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  display = false;
  logs = [];
  constructor() {}

  ngOnInit(): void {}

  onDisplayClick() {
    this.display = !this.display;
    this.logs.push(new Date());
  }
}
