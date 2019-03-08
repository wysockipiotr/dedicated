import { Component, OnInit, Input } from '@angular/core';
import { IQuestion } from '../_core/types';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from '../_core/title.service';
import { DataService } from '../_core/data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  questions$: Observable<IQuestion[]>;

  topicName$: Observable<string>;

  readonly links = ['Wszystkie pytania', 'Quiz'];

  activeLink = this.links[0];

  constructor(private _data: DataService, private _route: ActivatedRoute) {}

  ngOnInit() {
    this._data.loadTopicWithSlug(this._route.snapshot.params.slug);

    this.questions$ = this._data
      .getActiveTopic$()
      .pipe(map(topic => topic.questions));

    this.topicName$ = this._data
      .getActiveTopic$()
      .pipe(map(topic => topic.name));
  }

  swipeLeft() {
    if (this.activeLink !== this.links[1]) {
      this.activeLink = this.links[1];
    }
  }

  swipeRight() {
    if (this.activeLink !== this.links[0]) {
      this.activeLink = this.links[0];
    }
  }
}
