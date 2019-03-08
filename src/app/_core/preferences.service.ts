import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { BehaviorSubject } from 'rxjs';

export type AnswerCheckingPolicy =
  | 'highlightCorrectness'
  | 'highlightLogicalValue';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  readonly questionNumbersVisible$ = new BehaviorSubject<boolean>(false);

  readonly fabButtons$ = new BehaviorSubject<boolean>(false);

  constructor(private _storage: LocalStorage) {
    this._storage.getItem('questionNumbersVisible').subscribe(value => {
      if (value) {
        this.setQuestionNumbersVisibility(true);
      } else {
        this.setQuestionNumbersVisibility(false);
      }
    });

    this._storage.getItem('fabButtons').subscribe(value => {
      if (value) {
        this.setFabButtonsEnabled(true);
      } else {
        this.setFabButtonsEnabled(false);
      }
    });
  }

  setQuestionNumbersVisibility(visible: boolean) {
    this._storage.setItemSubscribe('questionNumbersVisible', visible);
    this.questionNumbersVisible$.next(visible);
  }

  setFabButtonsEnabled(enabled: boolean) {
    this._storage.setItemSubscribe('fabButtons', enabled);
    this.fabButtons$.next(enabled);
  }
}
