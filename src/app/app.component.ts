import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username=''

  isEmptyString(){
   return this.username===;
  }
  onDelete(){
    this.username=""
  }
}
