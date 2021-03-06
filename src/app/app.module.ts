import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GithubsearchService } from './githubsearch.service';
import { UserProfileAdvancedComponent } from './user-profile-advanced/user-profile-advanced.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserProfileAdvancedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GithubsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
