import 'hammerjs';

import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
  HammerGestureConfig
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { TopicComponent } from './topic/topic.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionsComponent } from './questions/questions.component';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TopicInfoPipe } from './_pipes/topic-info.pipe';
import { MaterialModule } from './material.module';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';

declare var Hammer: any;
export class MyHammerConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement) {
    let mc = new Hammer(element, {
      touchAction: 'pan-y'
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
    QuestionsComponent,
    SettingsDialogComponent,
    TopicInfoPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  entryComponents: [SettingsDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
