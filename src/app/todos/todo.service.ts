import { Injectable, Inject } from '@angular/core';
import { Telescope } from 'telescopejs';
import { AppState } from '../app.state';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  stream: any;

  constructor(@Inject('StreamContract') private streamContract: Telescope<AppState>) { 
    
    //this.stream = this.telescope.new(new TodoState());
    //this.stream.stream.subscribe(console.log);
  }
}
