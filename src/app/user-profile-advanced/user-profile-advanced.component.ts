import { Component, OnInit } from '@angular/core';
import { GithubsearchService } from '../githubsearch.service';

@Component({
  selector: 'user-profile-advanced',
  templateUrl: './user-profile-advanced.component.html',
  styleUrls: ['./user-profile-advanced.component.css']
})
export class UserProfileAdvancedComponent implements OnInit {
  userProfile = {};
  repos = [];
  followers = [];
  followings = [];
  selectedTab: number = 0; 

  constructor(private githubsearchService: GithubsearchService) { }

  ngOnInit() {
    this.githubsearchService.getUserProfile()
      .then( userProfile => {
        console.log('userprofile ', userProfile);
        this.userProfile = userProfile
      });
  }

  showRepos() {
    this.selectedTab = 1;
    this.githubsearchService.getRepos()
      .then( repos => {
        console.log('repos', repos);
        this.repos = repos;
      });
  }

  showFollowers() {
    this.selectedTab = 2;
    this.githubsearchService.getFollowers()
      .then( followers => {
        console.log('followers', followers);
        this.followers = followers;
      });
  }

  showFollowing() {
    this.selectedTab = 3;
    this.githubsearchService.getFollowing()
      .then( followings => {
        console.log('followings', followings);
        // debugger;
        this.followings = followings;
      });
  }

}
