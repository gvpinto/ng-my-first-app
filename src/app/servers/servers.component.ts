import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //   selector: '[app-servers]',
  //   selector: '.app-servers',
  //   template: `
  //     <app-server></app-server>
  //     <app-server></app-server>
  //   `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was Created';
  serverName: string = 'Test Server';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  onServerCreation() {
    this.serverCreationStatus = `New Server was Created. The new name is ${this.serverName}`;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  ngOnInit(): void {}
}
