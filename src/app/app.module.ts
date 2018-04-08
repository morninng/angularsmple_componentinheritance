import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { DataService } from './data.service';
import { Extend1Component } from './base/extend1/extend1.component';


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    Extend1Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
