import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Telescope } from 'telescopejs';
import { TodoService } from './todos/todo.service';
import { AppState } from './app.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TodoService,
    { provide: 'StreamContract', useFactory: ()=> Telescope.of( AppState.empty() ), deps: [] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
