import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DbcMainFooterComponent } from './dbc-main-footer/dbc-main-footer.component';
import { DbcMainHeaderComponent } from './dbc-main-header/dbc-main-header.component';
import { DbcLeftNavigationComponent } from './dbc-left-navigation/dbc-left-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    DbcMainFooterComponent,
    DbcMainHeaderComponent,
    DbcLeftNavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
