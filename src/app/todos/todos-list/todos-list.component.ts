import { Component, OnInit, Input } from '@angular/core';
import { Telescope } from 'telescopejs';
import { TodoState, Todo } from '../todo.state';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {

  @Input() list: Array<Todo>;
  @Input() serivce: TodoService;
  newTodo: string = '';

  add() {
    this.serivce.add(this.newTodo);
  }
}
