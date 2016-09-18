import { Component, OnInit } from '@angular/core';

import { GithubsearchService } from '../githubsearch.service';

@Component({
  selector: 'github-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile = {};

  constructor(private githubsearchService: GithubsearchService) { }

  ngOnInit() {
    this.githubsearchService.getUserProfile()
      .then( userProfile => {
        console.log('userprofile component', userProfile);
        this.userProfile = userProfile
      });
  }    

}
