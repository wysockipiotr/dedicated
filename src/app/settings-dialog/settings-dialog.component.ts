import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatRadioChange,
  MatSlideToggleChange,
  MatCheckboxChange
} from '@angular/material';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  AnswerCheckingPolicy,
  PreferencesService
} from '../_core/preferences.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent implements OnInit, OnDestroy {
  // answerCheckingPolicy: AnswerCheckingPolicy;

  private _unsubscribe = new Subject<void>();

  questionNumbersVisible: boolean;

  fabButtons: boolean;

  constructor(
    private _preferences: PreferencesService,
    public dialogRef: MatDialogRef<SettingsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {
    this._preferences.questionNumbersVisible$
      .pipe(takeUntil(this._unsubscribe))
      .subscribe(visible => {
        this.questionNumbersVisible = visible;
      });

    this._preferences.fabButtons$
      .pipe(takeUntil(this._unsubscribe))
      .subscribe(fab => {
        this.fabButtons = fab;
      });
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  onOkClick(): void {
    this.dialogRef.close();
  }

  onQuestionNumbersVisibilityChange(e: MatCheckboxChange) {
    this._preferences.setQuestionNumbersVisibility(e.checked);
  }

  onFabChange(e: MatCheckboxChange) {
    this._preferences.setFabButtonsEnabled(e.checked);
  }
}
