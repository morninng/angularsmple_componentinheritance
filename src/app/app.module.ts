import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { DataService } from './data.service';
import { Extend1Component } from './base/extend1/extend1.component';
import { UsershowBaseComponent } from './user/usershow-base/usershow-base.component';
import { UsershowIconComponent } from './user/usershow-icon/usershow-icon.component';
import { UsershowNameComponent } from './user/usershow-name/usershow-name.component';
import { UsershowIconNameComponent } from './user/usershow-icon-name/usershow-icon-name.component';


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    Extend1Component,
    UsershowBaseComponent,
    UsershowIconComponent,
    UsershowNameComponent,
    UsershowIconNameComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
