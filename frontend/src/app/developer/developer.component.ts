import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserstoryService } from '../userstory.service';
import { DeveloperService } from '../developer.service';


@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {
  public userstories = []
  developerId: any;
  obj: any;
  pcDummy: any;
  ID: any;
  Code: any;
  constructor(private developerService: DeveloperService,
    private router: Router,) {}
 
  ngOnInit(): void {
    this.getUserStoryListsByDeveloperId(this.developerId);
  }

  
  getUserStoryListsByDeveloperId(developerId: any): void {
    this.developerService.getUserStoryListsByDeveloperId(developerId)
      .subscribe(
        (response)=>{
          console.log(response);
          this.obj = response;
        }
        ,
        (error) => {
          console.log(error);
        }
      );
  }

  getUserStoryListsByProjectCode(Code: any): void{
    this.developerService.getUserStoryListsByProjectId(Code)
      .subscribe(
        (response)=>{
          console.log(response);
          this.obj = response;
        }
        ,
        (error) => {
          console.log(error);
        }
      );
  }



  updateUserstory(id: any){
    this.router.navigate(['update-userstory', id]);
  } 

}
