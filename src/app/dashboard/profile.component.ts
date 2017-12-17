import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <div class="container-fluid">
<div class="row">
<div class="col-12">
<div class="card card-inverse" style="background-color: #333; border-color: #333;">
<div class="card-block">
<div class="row">
<div class="col-md-8 col-sm-8">
<h2 class="card-title">Name: Stffanie Osterich</h2>
<p class="card-text"><strong>Profile: </strong> Web Developer </p>
<p class="card-text"><strong>Skills: </strong> Theme, plugin and website development </p>
<p><strong>Platform: </strong>
<span class="badge bg-primary">WordPress</span>
<span class="badge bg-info">Weebly</span>
<span class="badge bg-warning">Bootstrap</span>
<span class="badge bg-success">Wix</span>
</p>
</div>
<div class="col-md-4 col-sm-4 text-center">
<img class="btn-md" src="assets/images/card-image.png" alt="" style="border-radius:50%;">
</div>
<div class="col-md-4 col-sm-4 text-center">
<h2><strong> 5.2K </strong></h2>
<p><small>Fans</small></p>
<button class="btn btn-primary btn-block btn-md"><span class="fa fa-facebook-square"></span> Like  </button>
</div>
<div class="col-md-4 col-sm-4 text-center">
<h2><strong>1.4K</strong></h2>
<p><small>Following</small></p>
<button class="btn btn-success btn-block btn-md"><span class="fa fa-twitter-square"></span> Tweet </button>
</div>
<div class="col-md-4 col-sm-4 text-center">
<h2><strong>3.8K</strong></h2>
<p><small>Followers</small></p>
<button type="button" class="btn btn-danger btn-block btn-md"><span class="fa fa-google-plus-square"></span> Follow </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
