import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private baseURL = "http://localhost:8086";
  constructor(private httpClient: HttpClient) { }

  getReportById(id: string): Observable<any>{
    return this.httpClient.get(`${this.baseURL}/productbacklog/report/${id}`);
  }
}
