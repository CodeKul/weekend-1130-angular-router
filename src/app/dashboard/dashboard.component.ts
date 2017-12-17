import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usNm: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.usNm = this.router.routerState.snapshot.root.children[0].params['usNm'];

    console.log(this.router);
    // console.log(this.router.routerState.snapshot.root.children[0].params['usNm']);
    console.log(this.activatedRoute);
    this.activatedRoute.params.subscribe(
      params => this.usNm = params['usNm']
    );

    this.activatedRoute.queryParams.subscribe(
      params => console.log(params)
    );
  }
  onRedefine(nmNm: string) {
    this.router.navigate(['dashboard', nmNm]);
  }
}
