import { Job } from './../job';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {
  @Input('job') job: Job;
  constructor() { }

  ngOnInit() {
  }


}
