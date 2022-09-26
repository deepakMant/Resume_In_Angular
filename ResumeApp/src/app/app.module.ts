import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { ObjectiveComponent } from './objective/objective.component';
import { ExperienceComponent } from './experience/experience.component';
import { BasiceknowledgeComponent } from './basiceknowledge/basiceknowledge.component';
import { StrengthsComponent } from './strengths/strengths.component';
import { PersonalinformationComponent } from './personalinformation/personalinformation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ObjectiveComponent,
    ExperienceComponent,
    BasiceknowledgeComponent,
    StrengthsComponent,
    PersonalinformationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
