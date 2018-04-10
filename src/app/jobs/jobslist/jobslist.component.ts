import { Job } from './../job';
import { JobsService } from './../services/jobs.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'jobs-list',
  templateUrl: './jobslist.component.html',
  styleUrls: ['./jobslist.component.css']
})
export class JobslistComponent implements OnInit {

  jobs: Job[] = [];
  job: Job;
  
  @Output() onSelected = new EventEmitter<any>();

  constructor(private jobsService: JobsService) { }

  ngOnInit() {
    this.jobsService.getAll().subscribe(jobs => this.jobs = jobs);
  }

  select(job): void{
    this.job = job;
    this.onSelected.emit({job: job});
  }
}
