import { JobsService } from './../services/jobs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Job } from './../job';
import { ViewJobComponent } from '../view-job/view-job.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'upd-job',
  templateUrl: './upd-job.component.html',
  styleUrls: ['./upd-job.component.css']
})
export class UpdJobComponent implements OnInit {
  @Input() job: Job;
 

  constructor(private router: Router, private jobsService: JobsService, private route: ActivatedRoute  ) { }

  
  ngOnInit() {
    this.job = new Job();
    
    const id = this.route.snapshot.paramMap.get('id?');
    console.log(id);
    if(id){
      this.jobsService.get(id)
        .subscribe(job => this.job = job);
    }

  }

  save(): void{
      this.jobsService.updOne(this.job)
        .subscribe(() => this.back());
  }

  back():void{
    this.router.navigateByUrl('/jobs/recruiter')
  }

  delete():void{
    var c = confirm('Do you want to delete?');
    if(!c) return;
    this.jobsService.deleteOne(this.job)
      .subscribe(() => this.back());
  }

}
