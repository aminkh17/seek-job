import { Job } from './../job';
import { Http, RequestOptions, RequestOptionsArgs, RequestMethod, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

const API = 'http://localhost:3000/api/jobs/';

@Injectable()
export class JobsService {


  constructor(private http: Http) { }

  getAll() {
    return this.search();
  }

  get(id: any){
    return this.http.get(API+id)
      .map(res => res.json());
  }

  updOne(job: Job){
    console.log('update job');
    console.log(job);
    if(!job._id)
    {
      return this.http.post(API, job)
        .map(res => res.json());
    }
    else{
      return this.http.post(API, job)
        .map(res => res.json());      
    }
  }

  search(keyword?: string){
    let params: string;
    if(keyword)
      params = '?kw='+keyword
    return this.http.get(API, params)
      .map(res => res.json());
  }

  deleteOne(job: Job){
    return this.http.delete(API+job._id)
      .map(res => res.json());
  }

  upload(fileData){
    let file: File = fileData;
    let formData:FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    const headers = new Headers();
    /** In Angular 5, including the header Content-Type can invalidate your request */
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    const options = new RequestOptions(
      {  
        headers: headers
      });
    

    return this.http.post(API+'upload', formData, options)
        .map(res => res.json())
  }

}
