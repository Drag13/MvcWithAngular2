import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {SecurityService} from './app.security.service';
import {SecurityInfo} from './security/SecurityInfo';


@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.template.html',
    styleUrls: ['app/app.component.css'],
    providers: [SecurityService],
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