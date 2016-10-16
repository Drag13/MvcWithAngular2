import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Link } from '../usefullLinksService/link';
import { UsefullLinkService } from '../usefullLinksService/usefulllink.service';


@Component({
    selector: 'personal-cabinet',
    templateUrl: '/app/personalCabinet/personalCabinet.component.template.html',
    providers: [UsefullLinkService]
})

export class PersonalCabinet implements OnInit {

    private _usefullLinkService: UsefullLinkService;

    private _linkList: Link[]
    get LinkList() { return this._linkList; }

    constructor(private linkService: UsefullLinkService) {
        this._usefullLinkService = linkService;
    }

    public ngOnInit(): void {
        this._linkList = this._usefullLinkService.GetLinks();
    }
}