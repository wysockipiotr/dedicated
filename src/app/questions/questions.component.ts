import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { IQuestion } from '../_core/types';
import { ViewportScroller } from '@angular/common';
import { PreferencesService } from '../_core/preferences.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionsComponent implements OnInit {
  @Input() questions: IQuestion[];

  questionNumbersVisible$: Observable<boolean>;

  constructor(private _preferences: PreferencesService) {}

  ngOnInit() {
    this.questionNumbersVisible$ = this._preferences.questionNumbersVisible$;

    // this.scroller.scrollToPosition([0, 0]);
  }
}
