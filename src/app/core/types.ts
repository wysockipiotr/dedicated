export interface IAnswer {
  sentence: string;
  answer: boolean;
  userAnswer?: boolean;
}

export interface IQuestion {
  question: string;
  answers: IAnswer[];
}

export type Category = 'linux' | 'windows';

export interface IModule {
  name: string;
  category: Category;
  questions: IQuestion[];
}
