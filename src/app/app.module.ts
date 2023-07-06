import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderPrincipalMenuComponent } from './Components/header-principal-menu/header-principal-menu.component';
import { PicsGridComponent } from './Components/pics-grid/pics-grid.component';
import { PicsComponent } from './Components/pics/pics.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderPrincipalMenuComponent,
    PicsGridComponent,
    PicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
