import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
  title = 'movie';
  searchedText:string=""
  movies:any=[];
  receivedcontent:any=""
  constructor(private movie:MovieService){}
  ngOnInit():void
  {
    this.get()
  }
  get()
  {
    
    for(let i=1;i<1000;i++)
    {
      this.movie.getData(i).subscribe((res) => {
        this.movies.push(res)
        // console.log(this.movies)
      })
    }
  }

  getImg(url:string)
  {
    return "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"+url
  }

  getText(data:string)
  {
    this.searchedText=data
  }

  sendData(content:any)
  {
    this.receivedcontent=content
    console.log(this.receivedcontent)
  }

  close()
  {
    this.receivedcontent = ""
  }
}
