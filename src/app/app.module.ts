import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuAppComponent } from './menu-app/menu-app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

import { MovieDbService } from './movie-db.service';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { SerieDetailsComponent } from './serie-details/serie-details.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    AppComponent,
    MenuAppComponent,
    FilmListComponent,
    SeriesListComponent,
    AboutUsComponent,
    NotFoundComponent,
    HomeComponent,
    FilmDetailsComponent,
    SerieDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [
    MovieDbService,
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
