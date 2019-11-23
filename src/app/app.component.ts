import { Component } from '@angular/core';
import { TodoService } from './todos/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'telescope-todo';
  constructor( private todoService : TodoService ) {}
}
