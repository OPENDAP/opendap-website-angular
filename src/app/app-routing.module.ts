import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReleasesPageComponent } from './components/releases-page/releases-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HyraxComponent } from './components/hyrax/hyrax.component';
import { BoilerplateMakerComponent } from './components/boilerplate-maker/boilerplate-maker.component';
import { BoilerplateEditorComponent } from './components/boilerplate-maker/boilerplate-editor/boilerplate-editor.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'releases/:version', component: ReleasesPageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'hyrax', component: HyraxComponent },
  { path: 'devtools/boilerplate', component: BoilerplateMakerComponent},
  { path: 'devtools/boilerplate/:fixVersion', component: BoilerplateEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
