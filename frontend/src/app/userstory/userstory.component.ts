import { Component, OnInit } from '@angular/core';
import { Userstory } from '../userstory';
import { UserstoryService } from '../userstory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userstory',
  templateUrl: './userstory.component.html',
  styleUrls: ['./userstory.component.css']
})
export class UserstoryComponent implements OnInit{
  public userstories = []
  constructor(private userstoryService: UserstoryService,
    private router: Router) {}
 
  ngOnInit(): void {
    this.userstoryService.getUserStoryLists()
      .subscribe(data => {
        this.userstories = data;
        });
  }

  updateUserstory(id: number){
    this.router.navigate(['update-userstory', id]);
  } 
  
}
