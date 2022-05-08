import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenetrendComponent} from "./menetrend.component";

const routes: Routes = [
  {
    path: '',
    component: MenetrendComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenetrendRoutingModule { }
