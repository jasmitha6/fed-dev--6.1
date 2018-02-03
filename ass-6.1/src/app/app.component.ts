import { Component } from '@angular/core';
// defining the details of the component that is selector ,templateUrl and styleUrls.
@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class RootComponent {
  title:string;
  name: string;

  ngOnInit(){
    this.name = 'Welcome';
    this.title ='Sachin';
  }
}
