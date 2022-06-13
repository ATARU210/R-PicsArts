import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LeftBarComponent } from './Components/left-bar/left-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
