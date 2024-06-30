import { Component } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-viewreport',
  templateUrl: './viewreport.component.html',
  styleUrls: ['./viewreport.component.css']
})
export class ViewreportComponent {
  report: Map<string, number>;

  ID: any;

  constructor(private reportService: ReportService) { }


  data: { [key: string]: number } = { New: 0 , Done: 0, Coding: 0, Planning: 0, Testing: 0 };


  getReportById(id: any): void {
    this.reportService.getReportById(id)
      .subscribe(
        (response)=>{
          console.log(response);
          this.data = response;
        }
        ,
        (error) => {
          console.log(error);
        }
      );
  }

  getObjectKeys(obj: { [key: string]: number }): string[] {
    return Object.keys(obj);
  }
  
}
