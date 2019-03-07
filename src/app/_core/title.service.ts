import { Injectable } from '@angular/core';
import { ReplaySubject, BehaviorSubject } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  title$ = new BehaviorSubject<string>(null);

  constructor() {}
}
