import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IQuestion } from '../_core/types';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionsComponent implements OnInit {
  @Input() questions: IQuestion[];

  constructor(private scroller: ViewportScroller) {}

  ngOnInit() {
    this.scroller.scrollToPosition([0, 0]);
  }
}
