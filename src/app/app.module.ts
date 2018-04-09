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

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [PostsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
