import { Pipe, PipeTransform } from '@angular/core';
import { IModuleInfo } from './types';

@Pipe({
  name: 'topicInfo'
})
export class TopicInfoPipe implements PipeTransform {
  transform(value: IModuleInfo): string {
    let label = null;
    const digit = value.numberOfQuestions % 10;

    switch (digit) {
      case 1:
        label = 'pytanie';
        break;
      case 2:
      case 3:
      case 4:
        label = 'pytania';
        break;
      default:
        label = 'pytań';
        break;
    }

    return `${value.numberOfQuestions} ${label}`;
  }
}
