export class TestServer{
    constructor(public name: string, public description: string, public type: ServerType) {  }
}

export enum ServerType{
    Server = 1,
    Blueprint = 2
}
