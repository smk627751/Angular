import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  constructor() { }
  time:any;
  ngOnInit(): void {
    this.get();
  }
  get()
  {
    setInterval(()=>{
      this.time = new Date();
    },1000) 
  }
}
