import { Candidate } from './../jobs/candidate';
import { JobsService } from './../jobs/services/jobs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  constructor(private jobsService: JobsService) { }

  cand: Candidate;
  ngOnInit() {
    this.cand = new Candidate();
  }

  

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      this.jobsService.upload(fileList.item(0))
        .subscribe(resume => 
          {
            console.log(resume.resume.parts);
            this.cand = resume.resume.parts
          });
    }
  }
}
