import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyConversionComponent } from './components/currency-conversion/currency-conversion.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule}   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConversionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
