import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";

import {
  MatSelectModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatDividerModule,
  MatCardModule,
  MatGridListModule,
  MatRippleModule,
  MatTabsModule,
  MatBadgeModule,
  MatCheckboxModule
} from "@angular/material";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TopicComponent } from './topic/topic.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from "@angular/router";
import { QuizComponent } from './quiz/quiz.component';
import { QuestionsComponent } from './questions/questions.component';
import { FormsModule } from "@angular/forms";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, TopicComponent, HomeComponent, QuizComponent, QuestionsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatRippleModule,
    MatBadgeModule,
    HttpClientModule,
    MatCheckboxModule,
    FormsModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatSidenavModule,
    MatButtonToggleModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
