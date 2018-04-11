import { JobslistComponent } from './../jobslist/jobslist.component';
import { Job } from './../job';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  onSelected(event){
    this.selected = event.job;
    this.edt();
  }

  selected: Job;
     

  updateJob(sel?): void {
    //update a job or add a new one
    this.router.navigateByUrl('jobs/recruiter/updjob/'+(sel?sel._id:''));
  }

  addNew(): void {
    this.updateJob();
  }

  candidates(): void{
    this.router.navigateByUrl('jobs/candidates');
  }

  edt(): void {
    console.log(this.selected);
    this.updateJob(this.selected)
  }


}
