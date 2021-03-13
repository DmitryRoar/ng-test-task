import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

import {AboutRoutingModule} from './about-routing.module';

import {CollegePageComponent} from './college-page/college-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {CoursesPageComponent} from './courses-page/courses-page.component';
import {TeachersPageComponent} from './teachers-page/teachers-page.component';
import {ContactsPageComponent} from './contacts-page/contacts-page.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    CollegePageComponent,
    AboutPageComponent,
    CoursesPageComponent,
    TeachersPageComponent,
    ContactsPageComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class AboutModule {
}
