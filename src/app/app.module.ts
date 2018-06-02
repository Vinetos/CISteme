import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app.routing';
import {LbdModule} from './lbd/lbd.module';

import {AppComponent} from './app.component';

import {HomeComponent} from './home/home.component';
import {InterventionComponent} from './home/statistics/intervention.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InterventionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    LbdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
