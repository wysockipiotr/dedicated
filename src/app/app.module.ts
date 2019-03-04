import "hammerjs";

import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
  HammerGestureConfig
} from "@angular/platform-browser";
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
  MatCheckboxModule,
  MatDialogModule,
  MatRadioModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { TopicComponent } from "./topic/topic.component";
import { HomeComponent } from "./home/home.component";
import { QuizComponent } from "./quiz/quiz.component";
import { QuestionsComponent } from "./questions/questions.component";
import { FormsModule } from "@angular/forms";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

declare var Hammer: any;
export class MyHammerConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement) {
    let mc = new Hammer(element, {
      touchAction: "pan-y"
    });
    return mc;
  }
}
@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    HomeComponent,
    QuizComponent,
    QuestionsComponent
  ],
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
    MatDialogModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatButtonToggleModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
