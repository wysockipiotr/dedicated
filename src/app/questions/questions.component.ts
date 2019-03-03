import { Component, OnInit, Input, HostListener, Inject } from "@angular/core";
import { QuestionsService } from "../core/questions.service";
import { IQuestion } from "../core/types";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"]
})
export class QuestionsComponent implements OnInit {
  @Input() questions: IQuestion[];

  fabVisible = false;

  windowScrolled;

  constructor() {}

  ngOnInit() {}
}
