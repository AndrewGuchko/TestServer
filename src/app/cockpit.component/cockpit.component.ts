import { Component, EventEmitter, Output } from '@angular/core'
import { ServerType, TestServer } from '../server.model';
import { Form } from '@angular/forms'

@Component({
    selector: 'app-cockpit',
    templateUrl:'cockpit.component.html',
    styleUrls: ['cockpit.component.css']
})
export class CockpitComponent{
  //name:string;
  //description:string;
  @Output('onServerCreated') ServerCreated = new EventEmitter<TestServer>();
  @Output('onBlueprintCreated') BlueprintCreated = new EventEmitter<TestServer>();

  addServer(name:HTMLInputElement, description:HTMLInputElement){
    this.ServerCreated.emit(new TestServer(name.value, description.value, ServerType.Server))
  }
  addServerBlueprint(name:string, description:string){
    this.BlueprintCreated.emit(new TestServer(name, description, ServerType.Blueprint))
  }
}