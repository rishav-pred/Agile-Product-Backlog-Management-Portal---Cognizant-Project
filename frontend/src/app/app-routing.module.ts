import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EpicComponent } from './epic/epic.component';
import { UserstoryComponent } from './userstory/userstory.component';
import { CreateEpicComponent } from './create-epic/create-epic.component';
import { CreateUserstoryComponent } from './create-userstory/create-userstory.component';
import { UpdateUserstoryComponent } from './update-userstory/update-userstory.component';
import { ViewreportComponent } from './viewreport/viewreport.component';
import { DeveloperComponent } from './developer/developer.component';

const routes: Routes = [
  { path: 'epics', component: EpicComponent },
  { path:'', redirectTo: 'create-epic', pathMatch: 'full' },
  { path: 'userstories', component: UserstoryComponent,},
  { path: 'create-epic', component: CreateEpicComponent },
  { path: 'create-userstory', component: CreateUserstoryComponent},
  { path: 'update-userstory/:id', component: UpdateUserstoryComponent  },
  { path: 'viewreport', component: ViewreportComponent},
  { path: 'search', component: DeveloperComponent}
  // Add more routes for other components if needed
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


