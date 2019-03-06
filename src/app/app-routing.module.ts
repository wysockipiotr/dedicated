import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { TopicComponent } from './topic/topic.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomeComponent' } },
  {
    path: ':slug',
    component: TopicComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
