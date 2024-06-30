import { Component } from '@angular/core';
import { Userstory } from '../userstory';
import { UserstoryService } from '../userstory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-userstory',
  templateUrl: './create-userstory.component.html',
  styleUrls: ['./create-userstory.component.css']
})
export class CreateUserstoryComponent {

  userStory: Userstory = new Userstory();

  constructor(private userStoryService: UserstoryService,
    private router: Router){}

  ngOnInit(): void {
      
  }

  saveUserStory(){
    this.userStoryService.createUserStory(this.userStory).subscribe(data =>{
      console.log(data);
      this.goToUserStoriesList();
    },
    error => console.log(error));
  } 

  goToUserStoriesList(){
    this.router.navigate(['/userstories']);
  }

  onSubmit(){
    console.log(this.userStory);
    this.saveUserStory();
  }

  

  
}
