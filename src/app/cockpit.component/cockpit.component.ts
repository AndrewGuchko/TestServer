import { Component } from '@angular/core'
import { ServerType, TestServer } from '../server.model';
import { Form } from '@angular/forms'

@Component({
    selector: 'app-cockpit',
    templateUrl:'cockpit.component.html',
    styleUrls: ['cockpit.component.css']
})
export class CockpitComponent{
  name:string;
  description:string;

  addServer(){
    //this.Servers.push(new TestServer(this.name, this.description, ServerType.Server));
  }
  addServerBlueprint(){
    //this.Servers.push(new TestServer(this.name, this.description, ServerType.Blueprint));
  }
}