import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  //going to add this in app component
  //add declarator a ts feature which allow to enhance to use
  serverId: number = 9;
  serverStatus: string = 'offline';

  getServerStatus() {
    return 'offline';
  }
}
