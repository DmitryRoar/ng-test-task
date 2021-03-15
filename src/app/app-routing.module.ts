import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {AboutRoutingModule} from './about/about-routing.module';

import {ErrorPageComponent} from './error-page/error-page.component';

const routes: Routes = [
    {path: '', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
    {path: 'notfound', component: ErrorPageComponent},
    {path: '**', redirectTo: 'notfound'}
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
      }),
      AboutRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
