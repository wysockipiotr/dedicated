import { Pipe, PipeTransform } from '@angular/core';
import { ITopic, ITopicInfo } from '../_core/types';

@Pipe({
  name: 'topicInfo'
})
export class TopicInfoPipe implements PipeTransform {
  transform(topic: ITopicInfo): string {
    let label = null;
    const digit = topic.numberOfQuestions % 10;

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

    if (topic.numberOfQuestions > 10 && topic.numberOfQuestions < 20) {
      label = 'pytań';
    }

    return `${topic.numberOfQuestions} ${label}`;
  }
}
