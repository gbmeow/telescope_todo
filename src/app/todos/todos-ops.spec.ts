import { addTodo, todosLens } from './todos-ops';
import { TestBed, inject } from '@angular/core/testing';
import { Telescope } from 'telescopejs';
import { AppState } from '../app.state';
import { TodoState } from './todo.state';

describe('Todo Operations', () => {
  beforeEach(() => TestBed.configureTestingModule({
      providers: [
        { provide: 'StreamContract', useFactory: ()=> Telescope.of( AppState.empty() ), deps: [] }
      ]
  }));

  it('should be pure to ADD', inject(['StreamContract'], (telescope: Telescope<AppState>) => {
    let magnified:Telescope<TodoState> = telescope.magnify( todosLens() );
    let i = 0;
    magnified.stream.subscribe(
        x => {
            expect(x.todos.length).toEqual(i);
            console.log( x.todos );
            i++;
        }
    );
    addTodo(telescope, 'get sugar');
  }));

});