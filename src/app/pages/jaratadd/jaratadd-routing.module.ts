import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JarataddComponent } from './jaratadd.component';

const routes: Routes = [{ path: '', component: JarataddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JarataddRoutingModule { }
