import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { QuestionsService } from '../core/questions.service';
import { IQuestion } from '../core/types';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { TitleService } from '../core/title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  questions: IQuestion[] = [];

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  ngOnInit() {
    this.questions = this.questionsService.fromModule(
      this.questionsService.getModules()[0].name
    ).questions;

    this.title.title$.next('');
  }

  constructor(
    private router: Router,
    public questionsService: QuestionsService,
    private title: TitleService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    sanitizer: DomSanitizer
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 425px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  topicPicked(topic: any) {
    this.router.navigate([`/${topic.slug}`]);
  }
}
