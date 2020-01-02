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
  MatProgressSpinnerModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReleasesPageComponent } from './components/releases-page/releases-page.component';

import { HttpClientModule } from '@angular/common/http';
import { BoilerplateComponent } from './components/boilerplate/boilerplate.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HyraxComponent } from './components/hyrax/hyrax.component';
import { BoilerplateMakerComponent } from './components/boilerplate-maker/boilerplate-maker.component';
import { BoilerplateEditorComponent } from './components/boilerplate-maker/boilerplate-editor/boilerplate-editor.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

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
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
