import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeRoutingModule } from './practice-routing.module';
import { RowSelectionComponent } from './components/row-selection/row-selection.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RowSelectionComponent
  ],
  imports: [
    CommonModule,
    PracticeRoutingModule,
    FormsModule
  ]
})
export class PracticeModule { }
