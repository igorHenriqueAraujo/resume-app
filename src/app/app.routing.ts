import { Routes,RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
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
  }

];

export const routing=RouterModule.forRoot(APP_ROUTES);