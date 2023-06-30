import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LeftBarComponent } from './Components/left-bar/left-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderPrincipalMenuComponent } from './Components/header-principal-menu/header-principal-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftBarComponent,
    FooterComponent,
    HeaderPrincipalMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
