import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    SearchComponent,
    MovieDetailComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
