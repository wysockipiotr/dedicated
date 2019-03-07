export type Category = 'linux' | 'windows';

export interface ITopic {
  _id: string;
  name: string;
  category: Category;
  questions: IQuestion[];
  numberOfQuestions: number;
}

export interface IQuestion {
  _id: string;
  questionNumber: number;
  question: string;
  answers: IAnswer[];
  averagePercentOfCorrectAnswers?: number;
}
export interface IAnswer {
  sentence: string;
  truth: boolean;
  userAnswer?: boolean;
}

export interface ITopicInfo {
  name: string;
  slug: string;
  numberOfQuestions: number;
  category: Category;
}

