import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EmpolyeeComponent} from './empolyee/empolyee.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  {path:'employee',component:EmpolyeeComponent},
  {path:'department',component:DepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
