import { Router } from '@angular/router';
import { Job } from './../job';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobseeker',
  templateUrl: './jobseeker.component.html',
  styleUrls: ['./jobseeker.component.css']
})
export class JobseekerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selected: Job;

  onSelected(event){
    this.selected = event.job;
    if(!this.selected) return;
    this.router.navigateByUrl('/jobs/jobdetails/'+this.selected._id);

  }

}
