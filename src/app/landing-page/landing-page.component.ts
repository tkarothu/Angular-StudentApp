import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  showTable: boolean;

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigate(['/register-student']);
  }

  loadTable(){
    this.router.navigate(['student-grid'], { relativeTo: this.route });
  }

}
