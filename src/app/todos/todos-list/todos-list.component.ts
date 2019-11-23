import { Component, OnInit, Input } from '@angular/core';
import { Telescope } from 'telescopejs';
import { TodoState, Todo } from '../todo.state';

@Component({
  selector: 'todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {

  @Input() telescope: Telescope<TodoState>;
  @Input() list: Array<Todo>;
  newTodo: string = '';

  add(todo: string) {
    
  }
}
