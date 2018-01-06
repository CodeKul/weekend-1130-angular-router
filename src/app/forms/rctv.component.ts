import { User } from './usr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { setTimeout } from 'timers';
import { FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms/src/model';

@Component({
  selector: 'app-rctv',
  template: `
  <form class="form-horizontal" [formGroup]="fg" (ngSubmit)="onSubmit()" novalidate>
  <fieldset>
    <div id="legend">
      <legend class="">Reactive Form </legend>
    </div>
    <div class="control-group">
      <!-- Username -->
      <label class="control-label"  for="username">Username</label>
      <div class="controls">
        <input type="text" formControlName="usNm"  class="input-xlarge">
        <p class="help-block" >Username can contain any letters or numbers, without spaces</p>
      </div>
    </div>

    <div class="control-group">
      <!-- E-mail -->
      <label class="control-label" for="email">E-mail</label>
      <div class="controls">
        <input type="text" formControlName="eml" placeholder="" class="input-xlarge">
        <p class="help-block" >Please provide your E-mail</p>
        <p *ngIf="!fg.controls.eml.valid && fg.controls.eml.errors">{{fg.controls.eml.errors.errMsg}}</p>
      </div>
    </div>

    <div class="control-group">
      <!-- Password-->
      <label class="control-label" for="password">Password</label>
      <div class="controls">
        <input type="password" formControlName="pass" class="input-xlarge">
        <p class="help-block text-muted" >Password should be at least 4 characters</p>
      </div>
    </div>

    <div class="control-group">
      <!-- Button -->
      <div class="controls">
        <input (click)="dynCntrl()" type="button" class="btn btn-success" value="Add" >
      </div>
    </div>
    <div class="control-group" formArrayName="mobs" *ngFor="let mob of mobs().controls; let ind = index;">
      <input type="text" [formControlName]="ind">  
    </div>

    <div class="control-group">
      <!-- Button -->
      <div class="controls">
        <input type="submit" class="btn btn-success" value="Register" [disabled]="!fg.valid">
      </div>
    </div>
 </fieldset>
</form>
  `,
  styles: []
})
export class RctvComponent implements OnInit {

  fg: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    let usr = new User();
    usr.eml = 'android@android.com'
    usr.pass = '1223'
    usr.usNm = 'android'

    this.fg = fb.group({
      usNm: [usr.usNm, Validators.required, this.myAsyncValidator],
      eml: [usr.eml, Validators.compose(
        [
          Validators.required,
          Validators.email,
          this.myValidator
        ]
      )],
      pass: [usr.pass, Validators.required],
      mobs: fb.array([
        fb.control('')
      ])
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.fg)
  }

  dynCntrl() {
    let arr = this.fg['controls']['mobs']['controls'] as Array<FormControl>;
    arr.push(new FormControl())
  }

  myValidator(cntrl: AbstractControl): ValidationErrors | null {
    if (cntrl.value.charAt(0) === 'a') return null
    return {
      errMsg: 'value should start from a'
    }
  }

  myAsyncValidator(cntrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (cntrl.value.charAt(0) === 'a') res(null)
        else res({ errMsg: 'Field should start from a' })
      }, 1500);
    });
  }

  mobs(): FormArray {
    return this.fg.get('mobs') as FormArray;
  }
}
