import { Component } from '@angular/core';
import { ButtonAnimationDirective } from '../../directives/button-animation.directive';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-main',
  imports: [ButtonAnimationDirective, ReactiveFormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {


    // @ts-ignore
    excelForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private _toastr: ToastrService) {
      this.excelForm = this.formBuilder.group({
        excel: [null, Validators.required]
      });
    }

    get isValid() {
      return !this.excelForm.valid;
    }

    validateForm() {
      if (!!this.isValid) {
        this._toastr.error('Completa los campos obligatorios');
      } else {
        this.sendData();
      }
    }

    sendData() {
      console.log('Enviando')
    }


}
