import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Epic } from './epic';

@Injectable({
  providedIn: 'root'
})
export class EpicService {


  private baseURL = "http://localhost:8086/productbacklog/epics";

  constructor(private httpClient: HttpClient) { }

  getEpicsLists() : Observable<Epic[]>{
    return this.httpClient.get<Epic[]>(`${this.baseURL}`);
  }
  

  createEpic(epic: Epic): Observable<any>{
    return this.httpClient.post(`${this.baseURL}`, epic)
  }

}
