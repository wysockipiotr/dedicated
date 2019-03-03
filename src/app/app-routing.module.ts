import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { TopicComponent } from "./topic/topic.component";
import { QuizComponent } from "./quiz/quiz.component";
import { QuestionsComponent } from "./questions/questions.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "topic/:id", component: TopicComponent, children: [
    { path: "questions", component: QuestionsComponent },
    { path: "quiz", component: QuizComponent }
  ] }
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
