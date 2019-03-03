import { Injectable } from "@angular/core";

import DATA from "./data";
import { IModule } from "./types";

const slugify = (topic: IModule) =>
  topic.name
    .toLowerCase()
    .split(" ")
    .join("-");

@Injectable({
  providedIn: "root"
})
export class QuestionsService {
  constructor() {}

  getModules() {
    return DATA.map(m => ({
      name: m.name,
      category: m.category,
      slug: slugify(m)
    }));
  }

  fromModule(name: string): IModule {
    return DATA.find(m => m.name === name);
  }

  getTopicBySlug(slug: string) {
    return DATA.find(t => slugify(t) === slug);
  }
}
