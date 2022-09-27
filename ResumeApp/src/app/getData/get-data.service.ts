import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http : HttpClient) { 
  }
  getUserData() {
    let URL = "https://my-json-server.typicode.com/deepakMant/myjasondata/resume"
    return this.http.get(URL);
  }
}
