import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IQuestion } from '../_core/types';
import * as _ from 'lodash';
import {
  MAT_CHECKBOX_CLICK_ACTION,
  MatCheckboxChange
} from '@angular/material';
import { Observable } from 'rxjs';
import { PreferencesService } from '../_core/preferences.service';

type QuizState = 'answer' | 'check';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  providers: [{ provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check' }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizComponent implements OnInit {
  @Input() questions: IQuestion[];

  private questionPool_: IQuestion[];

  displayedQuestions: IQuestion[];

  quizState: QuizState = 'answer';

  fabButtonsEnabled$: Observable<boolean>;

  questionNumbersVisible$: Observable<boolean>;

  constructor(private _preferences: PreferencesService) {}

  ngOnInit() {
    this.fabButtonsEnabled$ = this._preferences.fabButtons$;
    this.questionNumbersVisible$ = this._preferences.questionNumbersVisible$;

    this.reloadAllQuestions_();
    this.pickNext();
  }

  private reloadAllQuestions_() {
    this.questionPool_ = _.shuffle([...this.questions]).map(q => ({
      ...q,
      answers: _.shuffle(q.answers)
    }));
  }

  checkAnswers() {
    this.quizState = 'check';
  }

  getColorClassForCheckResult(answer: boolean, userAnswer: boolean) {
    return this.quizState === 'check'
      ? answer === userAnswer
        ? 'correct-border'
        : 'wrong-border'
      : null;
  }

  pickNext() {
    this.quizState = 'answer';

    if (this.questionPool_.length < 2) {
      this.reloadAllQuestions_();
    } else {
      this.questionPool_ = _.shuffle(this.questionPool_);
    }

    this.displayedQuestions = this.questionPool_.splice(0, 2).map(q => ({
      ...q,
      answers: q.answers.map(a => ({ ...a, userAnswer: false }))
    }));
  }
}
