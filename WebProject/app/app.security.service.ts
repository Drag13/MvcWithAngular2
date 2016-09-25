import {Injectable} from '@angular/core';
import {SecurityInfo} from './security/SecurityInfo';

@Injectable()
export class SecurityService {
    public GetSecurity(): SecurityInfo {
        return new SecurityInfo('aGVsbG8gd29ybGQ=');
    }
}
