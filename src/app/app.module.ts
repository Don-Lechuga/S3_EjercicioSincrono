import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyModule } from './body/body.module';
import { SectionComponent } from './body/section/section.component';
import { HeaderModule } from './header/header.module';
import { NavbarComponent } from './header/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BodyModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [NavbarComponent,SectionComponent]
})
export class AppModule { }
