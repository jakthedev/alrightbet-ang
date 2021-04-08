import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { BrowserAnimationsModule } from '@angular/platform-broswer/animations';  
import { MatToolbarModule } from '@angular/material/toolbar';  
import { MatListModule } from '@angular/material/list'
import { FlexLayoutModule } from '@angular/flex-layout'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 

import 'hammerjs';
import { SportsComponent } from './sports/sports.component';

@NgModule({
  declarations: [
    AppComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    FlexLayoutModule,
    MatToolbarModule, 
    MatListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
