import { Component, OnInit } from '@angular/core';
import { TodoService } from './todos/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'telescope-todo';
  todos: any;
  constructor( private todoService : TodoService ) {}
  ngOnInit() {
    this.todos = this.todoService.state$.stream;
    this.todoService.load();
  }
}
