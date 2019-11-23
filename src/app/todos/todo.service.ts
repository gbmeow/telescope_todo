import { Injectable, Inject } from '@angular/core';
import { Telescope } from 'telescopejs';
import { AppState } from '../app.state';
import { todosLens, loadTodos } from './todos-ops';
import { TodoState, Todo } from './todo.state';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  state$: Telescope<TodoState>;
  loaded: boolean = false;
  constructor(@Inject('StreamContract') private streamContract: Telescope<AppState>) { 
    this.state$ = this.streamContract.magnify( todosLens() );
  }

  load() {
    if(!this.loaded) {
      loadTodos(this.streamContract, [new Todo('go to aroma'),new Todo('fix tires')] );
      this.loaded = true;
    }
  }

}
