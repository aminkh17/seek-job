import { JobsService } from './../jobs/services/jobs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Job } from './../jobs/job';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {

  constructor(private router: Router, private jobsService: JobsService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.job = new Job();
    
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if(id){
      this.jobsService.get(id)
        .subscribe(job => this.job = job);
    }
  }

  job: Job;


  back():void{
    this.router.navigateByUrl('/jobs/jobseeker')
  }
}
