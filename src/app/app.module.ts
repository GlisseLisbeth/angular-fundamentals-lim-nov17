import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ChildComponent} from './child/child.component';
import {ReactiveFormsModule} from "@angular/forms";
import {environment} from "../environments/environment";
import {AngularFireModule} from "angularfire2";
import {GithubComponent} from './github/github.component';
import {HttpClientModule} from "@angular/common/http";
import {GithubService} from "./github-service.service";
import {AngularFirestoreModule} from "angularfire2/firestore";
import { GamesComponent } from './games/games.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GithubComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
