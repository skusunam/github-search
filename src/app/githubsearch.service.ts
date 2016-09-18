import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubsearchService {
  
  private clientId = "5fd529216b8a0dc7d6b0";
  private clientSecret = "55870b4d7c343a69e6185a426d5d2dc274d39d86";
  private githubProfileUrl: string = 'https://api.github.com/users/skusunam';
  private githubReposUrl: string = 'https://api.github.com/users/skusunam/repos';
  private githubFollowersUrl: string = 'https://api.github.com/users/skusunam/followers';
  private githubFollowingUrl: string = 'https://api.github.com/users/skusunam/following';
  
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

  getRepos() {
    return this.http.get(this.githubReposUrl)
      .toPromise()
      .then(function(response){
        console.log(response.json());
        return response.json()
      })
      .catch(this.handleError);    
  }

  getFollowers() {
    return this.http.get(this.githubFollowersUrl)
      .toPromise()
      .then(function(response){
        console.log(response.json());
        return response.json()
      })
      .catch(this.handleError);    
  }  

  getFollowing() {
    return this.http.get(this.githubFollowingUrl)
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
