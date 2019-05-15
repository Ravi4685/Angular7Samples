import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular001';
  type = 'easy'
  score = 10


 displayMessage = function()
{
  //alert("curr score" + this.score)
  this.score = this.score+10
}

}
