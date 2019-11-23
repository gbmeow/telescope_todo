import { Telescope, Lens } from 'telescopejs';
import { TodoState, Todo } from './todo.state';
import { AppState } from '../app.state';

export const todosLens = () =>
  new Lens<AppState, TodoState>(
    (state) => {
        return state.todos;
    },
    (todos, state) => {
        state.todos = todos;
        return state;
    }
  );


export const addTodo = (telescope: Telescope<AppState>, title: string): void =>
telescope.evolve(
    (state) => {
        state.todos = state.todos.add(title);
        return state;
    }
);


export const loadTodos = (telescope: Telescope<AppState>, todos: Array<Todo>): void =>
telescope.evolve(
    (state) => {
        let todostate =  new TodoState([...state.todos.todos, ...todos]);
        let s = new AppState(todostate, state.people);
        return s;
    }
);