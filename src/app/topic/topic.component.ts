import { Component, OnInit, Input } from "@angular/core";
import { IModule } from "../core/types";
import { Router, ActivatedRoute } from "@angular/router";
import { QuestionsService } from "../core/questions.service";
import { TitleService } from "../core/title.service";

@Component({
  selector: "app-topic",
  templateUrl: "./topic.component.html",
  styleUrls: ["./topic.component.scss"]
})
export class TopicComponent implements OnInit {
  @Input() topic: IModule;

  links = ["Wszystkie pytania", "Quiz"];
  activeLink = this.links[0];

  constructor(
    private questions: QuestionsService,
    private route: ActivatedRoute,
    private router: Router,
    private title: TitleService
  ) {}

  ngOnInit() {
    // this.topic = this.questions.fromModule(
    //   this.questions.getModules()[this.route.snapshot.params.id].name
    // );

    this.topic = this.questions.getTopicBySlug(this.route.snapshot.params.slug);

    if (!this.topic) {
      this.router.navigate(["/"]);
    }

    this.title.title$.next(this.topic.name);
  }

  swipeLeft() {
    // this.activeLink = this.links[(this.links.indexOf(this.activeLink) + 1) % 2];

    if (this.activeLink !== this.links[1]) {
      this.activeLink = this.links[1];
    }
  }

  swipeRight() {
    if (this.activeLink !== this.links[0]) {
      this.activeLink = this.links[0];
    }
  }
}
