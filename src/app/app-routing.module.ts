import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReleasesPageComponent } from './components/releases-page/releases-page.component';
import { AboutUsComponent } from './components/content-heavy/about-us/about-us.component';
import { HyraxComponent } from './components/hyrax/hyrax.component';
import { BoilerplateMakerComponent } from './components/boilerplate-maker/boilerplate-maker.component';
import { BoilerplateEditorComponent } from './components/boilerplate-maker/boilerplate-editor/boilerplate-editor.component';
import { HomeComponent } from './components/home/home.component';
import { FaqComponent } from './components/faq/faq.component';
import { SupportComponent } from './components/support/support.component';
import { FaqSingleSectionComponent } from './components/faq/faq-single-section/faq-single-section.component';
import { NotFoundComponent } from './components/navigation/not-found/not-found.component';
import { SoftwareComponent } from './components/content-heavy/software/software.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'releases/:version', component: ReleasesPageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'hyrax', component: HyraxComponent },
  { path: 'support', component: SupportComponent },
  { path: 'support/faq', component: FaqComponent },
  { path: 'support/faq/:article', component: FaqSingleSectionComponent },
  { path: 'software', component: SoftwareComponent },
  { path: 'devtools/boilerplate', component: BoilerplateMakerComponent },
  { path: 'devtools/boilerplate/:fixVersion', component: BoilerplateEditorComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
