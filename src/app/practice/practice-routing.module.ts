import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RowSelectionComponent } from './components/row-selection/row-selection.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Practice'
    },
    children: [
      {
        path: '',
        redirectTo: 'row-selection'
      },
      {
        path: 'row-selection',
        component: RowSelectionComponent,
        data: {
          title: 'Row Selection'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule { }
