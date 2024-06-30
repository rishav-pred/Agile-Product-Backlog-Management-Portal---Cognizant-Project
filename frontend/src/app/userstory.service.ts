import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userstory } from './userstory';


@Injectable({
  providedIn: 'root'
})
export class UserstoryService {
  
  private baseURL = "http://localhost:8086/productbacklog/userstories";

  constructor(private httpClient: HttpClient,
   ) { }

  getUserStoryLists() : Observable<Userstory[]>{
    return this.httpClient.get<Userstory[]>(`${this.baseURL}`);
  }


  createUserStory(userStory: Userstory): Observable<any>{
    return this.httpClient.post('http://localhost:8086/productbacklog/userstories', userStory)
  }

  getUserstoryById(id : number): Observable<Userstory>{
    return this.httpClient.get<Userstory>(`${this.baseURL}/${id}`);
  }

  updateUserstory(id: any, userStory: any): Observable<Object>{
    return this.httpClient.put('http://localhost:8086/productbacklog/userstories/'+id, userStory);
  }

}
