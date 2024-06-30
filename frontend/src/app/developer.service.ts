import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://localhost:8086/productbacklog/userstories";

  private baseURLforDeveloper = "http://localhost:8086/productbacklog/userstories/developer";
  getUserStoryListsByDeveloperId(developerId: any){
    return this.httpClient.get(`${this.baseURLforDeveloper}/${developerId}`);
  }

  getUserStoryListsByProjectId(Code: any){
    return this.httpClient.get(`${this.baseURL}/${Code}`);
  }
}
