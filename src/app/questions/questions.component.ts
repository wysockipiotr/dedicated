import {
  Component,
  OnInit,
  Input,
} from "@angular/core";
import { IQuestion } from "../core/types";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"]
})
export class QuestionsComponent implements OnInit {
  @Input() questions: IQuestion[];

  constructor() {}

  ngOnInit() {}
}
