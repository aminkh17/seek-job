import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from "./posts/services/posts.service";

import { UsersComponent } from './users/users.component';
import {UsersService } from './users/services/users.service';
import { JobsComponent } from './jobs/jobs.component';
import { RecruiterComponent } from './jobs/recruiter/recruiter.component';
import { JobseekerComponent } from './jobs/jobseeker/jobseeker.component';
import { JobslistComponent } from './jobs/jobslist/jobslist.component';
import { UpdJobComponent } from './jobs/upd-job/upd-job.component';
import { JobsService } from './jobs/services/jobs.service';


// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'jobs',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'jobs/recruiter',
    component: RecruiterComponent
  },
  {
    path: 'jobs/recruiter/updjob/:id?',
    component: UpdJobComponent,
  },
  {
    path: 'jobs/jobseeker',
    component: JobseekerComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent,
    JobsComponent,
    RecruiterComponent,
    JobseekerComponent,
    JobslistComponent,
    UpdJobComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
