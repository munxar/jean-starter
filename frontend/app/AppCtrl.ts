import {IMessage} from "../../shared/interfaces";

export class AppCtrl {
    message:string;

    constructor($http: ng.IHttpService) {
        $http.get<IMessage>("api").then(res => this.message = res.data.message);
    }
}
