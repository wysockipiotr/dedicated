import { Injectable } from "@angular/core";

import DATA from "./data";
import { IModule } from "./types";

@Injectable({
  providedIn: "root"
})
export class QuestionsService {
  constructor() {}

  getModules() {
    return DATA.map(m => ({ name: m.name, category: m.category }));
  }

  fromModule(name: string): IModule {
    return DATA.find(m => m.name === name);
  }
}
