import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';

import { ProjectsComponent } from './projects/projects.component';
import { TranslateModule } from '@ngx-translate/core';
import { CvComponent } from './cv/cv.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'cv', component: CvComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TranslateModule.forRoot()],
  exports: [RouterModule],
})
export class AppRoutingModule {}
