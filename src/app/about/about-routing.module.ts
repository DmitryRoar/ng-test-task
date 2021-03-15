import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CollegePageComponent} from './college-page/college-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {TeachersPageComponent} from './teachers-page/teachers-page.component';
import {ContactsPageComponent} from './contacts-page/contacts-page.component';
import {CoursesPageComponent} from './courses-page/courses-page.component';

const routes: Routes = [
  {
    path: '',
    component: CollegePageComponent,
    children: [
      {path: 'about', component: AboutPageComponent},
      {path: 'courses', component: CoursesPageComponent},
      {path: 'teachers', component: TeachersPageComponent},
      {path: 'contacts', component: ContactsPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {
}
