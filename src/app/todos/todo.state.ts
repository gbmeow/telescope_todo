

export class TodoState {
    todos: Array<Todo>;

    constructor( todos: Array<Todo> = [] ) {
        this.todos = todos;
    }

    add(title: string): TodoState {
        let todos = [ {title } ];
        return new TodoState( [...this.todos, ...todos] );
    }
}

export class Todo {
    constructor( public title: string = ''){}
}