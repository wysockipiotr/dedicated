import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ITopicInfo } from '../_core/types';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { TitleService } from '../_core/title.service';
import { DataService } from '../_core/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  topicsInfo: ITopicInfo[] = [];

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    private _data: DataService,
    private _router: Router,
    private _title: TitleService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 560px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.topicsInfo = this._data.getTopicsInfo();
    this._title.title$.next('');
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  topicPicked(topic: ITopicInfo) {
    this._router.navigate([`/${topic.slug}`]);
  }
}
