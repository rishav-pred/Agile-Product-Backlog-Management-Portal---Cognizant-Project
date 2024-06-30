import { Component, OnInit } from '@angular/core';
import { Epic } from '../epic'
import { EpicService } from '../epic.service';

@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.css']
})
export class EpicComponent implements OnInit{
  epics: Epic[];


  constructor(private epicService: EpicService) {}
 
  ngOnInit() {
       this.epicService.getEpicsLists().subscribe(data => {
       this.epics = data;
     });
    }
}
