import { TodoState } from './todos/todo.state';
import { PersonsState } from './person/person.state';

interface STATE {
    todos: TodoState;
    people: PersonsState;
}


export class AppState implements STATE {

    static empty() {
        return new AppState( 
            new TodoState(), 
            new PersonsState() 
            );
    }
    todos: TodoState;
    people: PersonsState;
    
    constructor(todos: TodoState, people: PersonsState ) {
        this.todos = todos;
        this.people = people;
    }
}