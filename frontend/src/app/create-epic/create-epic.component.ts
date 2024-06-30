import { Component, OnInit } from '@angular/core';
import { Epic } from '../epic';
import { EpicService } from '../epic.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-epic',
  templateUrl: './create-epic.component.html',
  styleUrls: ['./create-epic.component.css']
})


export class CreateEpicComponent implements OnInit{

  epic: Epic = new Epic();
  constructor(private epicService: EpicService,
    private router: Router){}

  ngOnInit(): void {
      
  }

  saveEpic(){
    this.epicService.createEpic(this.epic).subscribe(data =>{
      console.log(data);
      this.goToEpicList();
    },
    error => console.log(error));
  } 

  goToEpicList(){
    this.router.navigate(['/epics']);
  }

  onSubmit(){
    console.log(this.epic);
    this.saveEpic();
  }
}
