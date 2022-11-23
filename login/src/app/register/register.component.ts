import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  status:boolean=false
  phoneno:string

  post(data:{firstname:string,lastname:string,gender:string,username:string,password:string,email:string,phone:string})
  {
    this.http.post("https://database-d2769-default-rtdb.firebaseio.com/user.json",data).subscribe(res => {
      console.log(res)
      this.status=true
    })

    // console.log(this.phoneno)
  }
  length()
  {
    if(this.phoneno.length > 10)
    {
      this.phoneno = this.phoneno.substring(0,10)
    }
  }
}
