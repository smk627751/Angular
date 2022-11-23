import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private poke:PokemonService){}
  ngOnInit(): void {
    this.get()
  }
  title = 'pokemon';
  pokemons:any = []
  searchText:string ="";
  get()
  {
    for(let i = 1 ; i<=151;i++)
    {
       this.poke.getData(i).subscribe((res) => {
        this.pokemons.push(res);
        this.pokemons=this.pokemons.sort()
        console.log(this.pokemons)
       })
    }
  }

  toSearch(data:string)
  {
    this.searchText=data;
    console.log(this.searchText)
  }
}
