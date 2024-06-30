import { Component, OnInit } from '@angular/core';
import { Userstory } from '../userstory';
import { UserstoryService } from '../userstory.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-userstory',
  templateUrl: './update-userstory.component.html',
  styleUrls: ['./update-userstory.component.css']
})
export class UpdateUserstoryComponent implements OnInit{


  id: any;
  constructor(private userstoryService: UserstoryService,
    private route: ActivatedRoute,
    private router: Router){}

  userStory: Userstory = new Userstory();

  ngOnInit(){
    this.id = this.route.snapshot.params['id']; // access id from route url

    this.userstoryService.getUserstoryById(this.id).subscribe(data => {
      this.userStory = data;
    }, error => console.log(error));
  }


  obj: any = {id: '', title: '', userStoryDetails: '', acceptanceCriteria: '', priority: '', createdOn:'', doneOn: '', assignedToDeveloperId: '', storyPoints: '', status: ''};
  saveUserStory(){
    this.userstoryService.updateUserstory(this.id, this.obj).subscribe(data => {
      console.log(data);
        this.goToUserStoriesList();
    }, error => console.log(error));
  }
  onSubmit(){
    console.log(this.userStory);
    this.saveUserStory();
  }

  goToUserStoriesList(){
    this.router.navigate(['/userstories']);
  }
}
 