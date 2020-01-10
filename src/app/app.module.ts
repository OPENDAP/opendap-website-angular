import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatExpansionModule,
  MatDividerModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatSelectModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatTableModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule,
  MatTabsModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReleasesPageComponent } from './components/releases-page/releases-page.component';

import { HttpClientModule } from '@angular/common/http';
import { BoilerplateComponent } from './components/boilerplate/boilerplate.component';
import { AboutUsComponent } from './components/content-heavy/about-us/about-us.component';
import { HyraxComponent } from './components/hyrax/hyrax.component';
import { BoilerplateMakerComponent } from './components/boilerplate-maker/boilerplate-maker.component';
import { BoilerplateEditorComponent } from './components/boilerplate-maker/boilerplate-editor/boilerplate-editor.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/navigation/nav/nav.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import { FaqSectionComponent } from './components/faq/faq-section/faq-section.component';
import { FaqSearchComponent } from './components/faq/faq-search/faq-search.component';
import { SupportComponent } from './components/support/support.component';
import { NavigationDockComponent } from './components/navigation/navigation-dock/navigation-dock.component';
import { FaqSingleSectionComponent } from './components/faq/faq-single-section/faq-single-section.component';
import { NotFoundComponent } from './components/navigation/not-found/not-found.component';
import { SoftwareComponent } from './components/content-heavy/software/software.component';
import { MarkdownComponent } from './components/markdown/markdown.component';
import { MatMarkdownModule } from './components/mat-markdown-module/mat-markdown-module.component';

@NgModule({
  declarations: [
    AppComponent,
    ReleasesPageComponent,
    BoilerplateComponent,
    AboutUsComponent,
    HyraxComponent,
    BoilerplateMakerComponent,
    BoilerplateEditorComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    FaqComponent,
    FaqSectionComponent,
    FaqSearchComponent,
    SupportComponent,
    NavigationDockComponent,
    FaqSingleSectionComponent,
    NotFoundComponent,
    SoftwareComponent,
    MarkdownComponent,
    MatMarkdownModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatExpansionModule,
    MatMenuModule,
    FormsModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
