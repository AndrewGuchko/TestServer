import { Component } from '@angular/core';
import { ServerType, TestServer } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Servers:TestServer[] = [new TestServer('server', 'test server', ServerType.Blueprint)];
  name:string;
  description:string;

  onServerAdded(Server: TestServer){
    this.Servers.push(Server);
  }
  onServerBlueprintAdded(ServerBlueprint: TestServer){
    this.Servers.push(ServerBlueprint);
  }
}
