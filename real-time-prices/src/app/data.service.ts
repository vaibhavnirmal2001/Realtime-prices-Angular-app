import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('/assets/data/WebScrapp.json');


  //  let url = 'http://127.0.0.1:5000/getData'
  //   return this.http.get(url);

  }
  
  
}
