import DATA from './data';
import { Injectable } from '@angular/core';
import { IModule, Category, IModuleInfo } from './types';

const slugify = (topic: IModule) =>
  topic.name
    .toLowerCase()
    .split(' ')
    .join('-');

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor() {}

  getModules(): IModuleInfo[] {
    return DATA.map(m => ({
      name: m.name,
      category: m.category,
      slug: slugify(m),
      numberOfQuestions: m.questions.length
    }));
  }

  fromModule(name: string): IModule {
    return DATA.find(m => m.name === name);
  }

  getTopicBySlug(slug: string) {
    return DATA.find(t => slugify(t) === slug);
  }
}
