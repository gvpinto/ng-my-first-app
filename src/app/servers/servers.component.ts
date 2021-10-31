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
  serverCreated = false;
  servers = ['Test Server 1', 'Test Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  onServerCreation() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `New Server was Created. The new name is ${this.serverName}`;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  ngOnInit(): void {}
}
