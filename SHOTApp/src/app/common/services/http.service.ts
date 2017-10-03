import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HttpService {

  constructor(private http: Http) { }
  
  setcontentTypeJson(headers: Headers) {
    headers.append('Content-Type', 'application/json'); 
    headers.append('Accept', 'application/json');    
  }

  post( url: string, body: any): Observable<any> {

    let headers = new Headers();
    this.setcontentTypeJson(headers);

    let options = new RequestOptions({headers: headers});
    
    return this.http.post( url, body,  options);
  }
        

}
