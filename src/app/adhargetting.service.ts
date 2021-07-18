import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdhargettingService {

  private baseUrl="http://localhost:3322/adhar/";

  url="http://localhost:3322/normal";

  constructor(private http:HttpClient) { }
  

  getAdharList(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getNormal():Observable<any>
  {
    return this.http.get(this.url);
  }
}
