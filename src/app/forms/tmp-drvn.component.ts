import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tmp-drvn',
  template: `
    <form class="form-horizontal" #myFrm="ngForm" (ngSubmit)="onSubmit(myFrm)">
      <fieldset>
        <div id="legend">
          <legend class="">Template Driven Register Form </legend>
        </div>
        <div class="control-group">
          <!-- Username -->
          <label class="control-label"  for="username">Username</label>
          <div class="controls">
            <input type="text" id="username" name="username" placeholder="" class="input-xlarge"
            [(ngModel)]="regDt.username"
            required
            #usNm="ngModel">
            <p class="help-block" *ngIf="!usNm.valid">Username can contain any letters or numbers, without spaces</p>
          </div>
        </div>
  
        <div class="control-group">
          <!-- E-mail -->
          <label class="control-label" for="email">E-mail</label>
          <div class="controls">
            <input type="text" id="email" name="email" placeholder="" class="input-xlarge" [(ngModel)]="regDt.email"
            required
            [pattern]="patt"
            #eml="ngModel">
            <p class="help-block" *ngIf="!eml.valid">Please provide your E-mail</p>
          </div>
        </div>
  
        <div class="control-group">
          <!-- Password-->
          <label class="control-label" for="password">Password</label>
          <div class="controls">
            <input type="password" id="password" name="password" placeholder="" class="input-xlarge" [(ngModel)]="regDt.password" required #pass="ngModel">
            <p class="help-block" *ngIf="!pass.valid">Password should be at least 4 characters</p>
          </div>
        </div>
  
        <div class="control-group">
          <!-- Button -->
          <div class="controls">
            <input type="submit" class="btn btn-success" value="Register" [disabled]="!myFrm.valid">
          </div>
        </div>
     </fieldset>
  </form>
  `,
  styles: []
})
export class TmpDrvnComponent implements OnInit {

  regDt = {
    username: '',
    password: '',
    email: ''
  };

  patt = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
  constructor() { }

  ngOnInit() {
  }

  onSubmit(frmVal?: any) {
    console.log(frmVal)
    console.log(this.regDt)
  }
}
