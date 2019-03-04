import {
  Component,
  OnInit,
  Input,
} from "@angular/core";
import { IQuestion } from "../core/types";
import { ViewportScroller } from "@angular/common";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"]
})
export class QuestionsComponent implements OnInit {
  @Input() questions: IQuestion[];

  constructor(private scroller: ViewportScroller) {}

  ngOnInit() {
    this.scroller.scrollToPosition([0,0]);
  }
}
