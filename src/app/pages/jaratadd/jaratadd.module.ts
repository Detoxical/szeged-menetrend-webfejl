import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JarataddRoutingModule } from './jaratadd-routing.module';
import { JarataddComponent } from './jaratadd.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    JarataddComponent
  ],
  imports: [
    CommonModule,
    JarataddRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class JarataddModule { }
