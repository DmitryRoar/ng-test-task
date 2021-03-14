import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

import {COLLEGE_ABOUT} from '../shared/providers/about.provider';

import {AboutInterface} from '../shared/interfaces/about.interface';

@Component({
  selector: 'app-college',
  templateUrl: './college-page.component.html',
  styleUrls: ['./college-page.component.scss']
})
export class CollegePageComponent implements OnInit, OnDestroy {
  college$: Subscription;

  college: AboutInterface;
  isLoading = true;

  constructor(
    @Inject(COLLEGE_ABOUT) readonly collegeProvider: Observable<AboutInterface>,
    public translate: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.translator();
    this.getCollege();
  }

  private translator(): void {
    this.translate.addLangs(['ru', 'en']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }

  private getCollege(): void {
    this.isLoading = true;
    this.college$ = this.collegeProvider.subscribe((college: AboutInterface) => {
      this.college = college;
      this.isLoading = false;
    }, () => {
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    if (this.college$) {
      this.college$.unsubscribe();
    }
  }
}
