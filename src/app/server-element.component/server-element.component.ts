import { Component, Input } from '@angular/core'
import { TestServer } from '../server.model';

@Component({
    templateUrl:'server-element.component.html',
    selector:'app-server-element',
    styleUrls:['server-element.component.css']
})
export class ServerElementComponent{
    @Input('server') element: TestServer
}