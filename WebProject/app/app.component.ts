import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {SecurityService} from './app.security.service';
import {SecurityInfo} from './security/SecurityInfo';


@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
                <p>Hello user. You was authenticated with token: <span class="security-token">{{SecurityInfo.Token}}</span></p>
                <p>All systems nominal </p>`,
    providers: [SecurityService],
    styles: ['.security-token{color:green}']
})


export class AppComponent implements OnInit {

    private _securityInfo: SecurityInfo;
    get SecurityInfo() { return this._securityInfo; }
    private _securityService: SecurityService;

    constructor(private securityService: SecurityService) {
        this._securityService = securityService;
    }

    //Class should not know about how to get data. It have only use them.
    private GetSecurity(): void {
        this._securityInfo = this._securityService.GetSecurity();
    }

    public ngOnInit(): void {
        this.GetSecurity();
    }
}