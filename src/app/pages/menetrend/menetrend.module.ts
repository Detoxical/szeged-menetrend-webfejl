import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenetrendRoutingModule } from './menetrend-routing.module';
import {MenetrendComponent} from "./menetrend.component";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    MenetrendComponent
  ],
  imports: [
    CommonModule,
    MenetrendRoutingModule,
    MatButtonModule,
    MatTableModule,
    FlexLayoutModule
  ]
})
export class MenetrendModule { }
