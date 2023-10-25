import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
 
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
