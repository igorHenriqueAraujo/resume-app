import { Routes,RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { AwardsComponent } from './awards/awards.component';
import { TestimonyComponent } from './testimony/testimony.component';
const APP_ROUTES:Routes=[
  {
    path:'',
    redirectTo:'/about',
    pathMatch:'full'
  },
  {
    path:'profile',
    redirectTo:'/about'
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'experience',
    component:ExperienceComponent
  },
  {
    path:'education',
    component:EducationComponent
  },
  {
    path:'skills',
    component:SkillsComponent
  },
  {
    path:'awards',
    component:AwardsComponent
  },
  {
    path:'testimony',
    component:TestimonyComponent
  }

];

export const routing=RouterModule.forRoot(APP_ROUTES);