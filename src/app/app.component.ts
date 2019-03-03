import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { QuestionsService } from './core/questions.service';
import { IQuestion } from './core/types';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { TitleService } from './core/title.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  questions: IQuestion[] = [];

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  title$: Observable<string>;

  ngOnInit() {
    this.title$ = this.title.title$;

    this.questions = this.questionsService.fromModule(
      this.questionsService.getModules()[0].name
    ).questions;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private title: TitleService,
    private questionsService: QuestionsService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 425px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    iconRegistry.addSvgIcon(
      'windows',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/windows.svg')
    );

    iconRegistry.addSvgIcon(
      'ubuntu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/ubuntu.svg')
    );

    iconRegistry.addSvgIcon(
      'linux',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/linux.svg')
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  navigateHome() {
    this.router.navigate(['/']);
  }
}
