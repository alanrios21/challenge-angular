import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  exports: [
     MatFormFieldModule,
     MatInputModule, 
     BrowserModule,
     BrowserAnimationsModule ,
     ReactiveFormsModule,
     FormsModule,
     MatDialogModule,
  ],
  declarations: [
   
  ],
})

export class MaterialModule {};