import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'converter';

  in:number | any = '';
  out:number | any ='';
  select1!:string;
  select2!:string;
  val!:number;

  convert()
  {
    if(this.select1 == "INR" && this.select2 == "USD")
    {
      this.val=72;
      this.out = this.in*this.val
    }

    if(this.select1 == "USD" && this.select2 == "INR")
    {
      this.val=72;
      this.out = this.in/this.val
    }

  }
}
