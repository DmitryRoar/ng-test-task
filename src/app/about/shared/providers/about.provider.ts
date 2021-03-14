import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';

import {AboutInterface} from '../interfaces/about.interface';

export const COLLEGE_ABOUT = new InjectionToken<Observable<AboutInterface>>('About college', {
  factory: () => new Observable(subs => {
    subs.next({
      id: 23,
      name: 'иннополис',
      photo: 'assets/img/college-img.jpg',
      about: 'about info',
      media_type: 32313,
      vimeo_video_id: 534534
    });
  })
});
