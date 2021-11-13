import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import { UpdateComponent } from './update/update.component';
import { ViewdataComponent } from './viewdata/viewdata.component';

const routes: Routes = [
  { path: 'addemployee', component: AddemployeeComponent },
  { path: 'viewdata', component: ViewdataComponent },
  { path: 'display/:id', component: DisplaydataComponent },
  { path :'update/:id',component:UpdateComponent},
  { path: '', redirectTo: 'viewdata', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
