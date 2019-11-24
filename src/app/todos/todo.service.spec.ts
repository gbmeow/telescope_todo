import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { Telescope } from 'telescopejs';
import { AppState } from '../app.state';

describe('TodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: 'StreamContract', useFactory: ()=> Telescope.of( AppState.empty() ), deps: [] }
    ]
    }));

  it('should get a telescope', () => {
    const service: TodoService = TestBed.get(TodoService);
    service.state$.stream.subscribe(
      x => expect(x.todos.length).toEqual(0)
    );
  });


  it('should load new todos', () => {
    const service: TodoService = TestBed.get(TodoService);
    let i = 0;
    service.state$.stream.subscribe(
      x => {
        expect(x.todos.length).toEqual(i * 2);
        i++;
      }
    );
    service.load();
  });

  it('should add new todos', () => {
    const service: TodoService = TestBed.get(TodoService);
    let i = 0;
    service.state$.stream.subscribe(
      x => {
        expect(x.todos.length).toEqual(i);
        i++;
      }
    );
    service.add('order sugar');
  });
});
