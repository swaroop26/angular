import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import { Constants } from '../app.constants';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  constructor(private http: HttpService) { }

  //private loginUrl = '/api/login/';  // URL to web API 
  
  login( loginData: any ): Observable<any> { 
     
    return this.http.post( Constants.LOGIN_API_URL, loginData ).map(( res: Response ) => res.json() );
  }

}
