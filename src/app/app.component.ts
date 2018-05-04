import { Component } from '@angular/core';
import { ServerType, TestServer } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Servers:TestServer[] = [];
  name:string;
  description:string;

  addServer(){
    this.Servers.push(new TestServer(this.name, this.description, ServerType.Server));
  }
  addServerBlueprint(){
    this.Servers.push(new TestServer(this.name, this.description, ServerType.Blueprint));
  }
}
