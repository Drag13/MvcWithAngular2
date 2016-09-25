export class SecurityInfo {

    private _token: string;
    get Token(): string { return this._token; };

    get IsAuthenticated() {
        return !!this._token;
    }

    constructor(token: string) {
        this._token = token;
    }
    
}