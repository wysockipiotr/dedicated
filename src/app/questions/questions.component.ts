import { Component, OnInit, Input, HostListener, Inject } from "@angular/core";
import { IQuestion } from "../core/types";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"]
})
export class QuestionsComponent implements OnInit {
  @Input() questions: IQuestion[];

  fabVisible = false;

  constructor() {}

  ngOnInit() {}

}
