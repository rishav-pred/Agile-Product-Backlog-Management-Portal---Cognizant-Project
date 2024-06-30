import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';


import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { EpicComponent } from './epic/epic.component';
import { UserstoryComponent } from './userstory/userstory.component';
import {  HttpClientModule  } from '@angular/common/http'
import { UserstoryService } from './userstory.service';
import { EpicService } from './epic.service';
import { CreateEpicComponent } from './create-epic/create-epic.component';
import { CreateUserstoryComponent } from './create-userstory/create-userstory.component';
import { UpdateUserstoryComponent } from './update-userstory/update-userstory.component';
import { ViewreportComponent } from './viewreport/viewreport.component';
import { DeveloperComponent } from './developer/developer.component';


@NgModule({
  declarations: [
    AppComponent,
    EpicComponent,
    UserstoryComponent,
    CreateEpicComponent,
    CreateUserstoryComponent,
    UpdateUserstoryComponent,
    ViewreportComponent,
    DeveloperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [UserstoryService, EpicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
