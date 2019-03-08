import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, from } from 'rxjs';

import { TOPICS } from './data';
import { ITopicInfo } from './types';
import { slugify } from '../_utils/slugify';
// import { LocalStorage } from '@ngx-pwa/local-storage';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TitleService } from './title.service';

// interface IQuestionsStats {
//   [key: string]: number;
// }

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _activeTopicId$ = new BehaviorSubject<number>(null);

  constructor(
    // private _storage: LocalStorage,
    private _router: Router,
    private _title: TitleService
  ) {}

  getTopicsInfo() {
    return TOPICS.map(
      topic =>
        ({
          name: topic.name,
          slug: slugify(topic),
          numberOfQuestions: topic.numberOfQuestions,
          category: topic.category
        } as ITopicInfo)
    );
  }

  loadTopicWithIndex(index: number) {
    if (index < 0 || index >= TOPICS.length) {
      this._router.navigate(['/']);
    } else {
      this._activeTopicId$.next(index);
    }
  }

  loadTopicWithSlug(slug: string) {
    const index = TOPICS.findIndex(topic => slugify(topic) === slug);
    this.loadTopicWithIndex(index);
  }

  getActiveTopic$ = () =>
    from(this._activeTopicId$).pipe(
      map(activeTopicId => {
        const topic = TOPICS[activeTopicId];
        this._title.title$.next(topic.name);
        return topic;
      })
    );
  // combineLatest(
  //   this._activeTopicId$,
  //   this._storage.getItem<IQuestionsStats>('stats')
  // ).pipe(
  //   map(([activeTopicId, stats]) => {
  //     if (stats == null) {
  //       const questionIds = TOPICS.map(t =>
  //         t.questions.map(question => question._id)
  //       ).reduce((lhs, rhs) => [...lhs, ...rhs]);

  //       const defaultStats = {} as IQuestionsStats;

  //       questionIds.forEach(id => {
  //         defaultStats[id] = 0;
  //       });

  //       this._storage.setItemSubscribe('stats', defaultStats);
  //     }

  //     const topic = TOPICS[activeTopicId];

  //     this._title.title$.next(topic.name);

  //     return {
  //       ...topic,
  //       questions: topic.questions.map(question => {
  //         return {
  //           ...question,
  //           averagePercentOfCorrectAnswers: stats
  //             ? question._id in stats
  //               ? stats[question._id]
  //               : 0
  //             : 0
  //         };
  //       })
  //     };
  //   })
  // )
}
