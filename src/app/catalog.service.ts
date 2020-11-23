import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  public host = 'http://http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getResource(url){
    return this.http.get(this.host + url);
  }
}
