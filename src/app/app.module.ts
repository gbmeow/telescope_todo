import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Telescope } from 'telescopejs';
import { TodoService } from './todos/todo.service';
import { AppState } from './app.state';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TodoService,
    { provide: 'StreamContract', useFactory: ()=> Telescope.of( AppState.empty() ), deps: [] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
