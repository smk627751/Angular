import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.get()
  }
  loginstatus:boolean=false
  err:boolean=false
  passErr:boolean=false
  index!:number
  userdetails=[]
  get()
  {
    try
    {
      this.http.get("https://database-d2769-default-rtdb.firebaseio.com/user.json")
      .pipe(map(res =>{
        const users = []
        for(const key in res)
        {
          if(res.hasOwnProperty(key))
          {
            users.push({...res[key],id:key})
          }
        }
        return users
      })).subscribe(users => this.userdetails=users)
    }
    catch(err)
    {
      console.log(err)
    }
  }

  check(data)
  {
    for(let i=0;i<this.userdetails.length;i++)
    {
      if(data.username != '' && this.userdetails[i].username == data.username)
      {
        this.err=false
        if(data.password != '' && this.userdetails[i].password == data.password)
        {
          this.loginstatus=true
          this.index=i
          console.log('valid')
          this.passErr=false
          break
        }
        else if(data.password != '')
        {
          this.passErr=true
          break
        }
      }
      else if(data.username != '') this.err=true
    }
  }
}
