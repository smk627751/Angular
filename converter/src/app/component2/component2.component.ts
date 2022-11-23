import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
      this.out = this.in/this.val
    }

    if(this.select1 == "USD" && this.select2 == "INR")
    {
      this.val=72;
      this.out = this.in*this.val
    }

  }
}
