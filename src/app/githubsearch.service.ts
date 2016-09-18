import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubsearchService {
  
  private githubProfileUrl: string = 'https://api.github.com/users/skusunam';
  
  constructor(private http: Http) { }

  getUserProfile() {
    return this.http.get(this.githubProfileUrl)
      .toPromise()
      .then(function(response){
        console.log(response.json());
        return response.json()
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
