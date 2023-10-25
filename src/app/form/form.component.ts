import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  public myForm: FormGroup =  this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ] ],
    email: ['', [ Validators.required, Validators.min(0) ] ],
    phone: ['',[ Validators.required, Validators.min(0) ]],
  })

  constructor(private fb: FormBuilder, public dialog: MatDialog ){

  }

  onSave():void {

    if (this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    const dialogRef = this.dialog.open(ModalComponent, {
      data: {name: this.myForm.value.name, email: this.myForm.value.email, phone: this.myForm.value.phone},
      height: '70%',
      width: '60%'
    });

  
    dialogRef.afterClosed().subscribe(result => {

    });
 
    this.myForm.reset({ name: '', phone: '', email: '' });

  }
}
