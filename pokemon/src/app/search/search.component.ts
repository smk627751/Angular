import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  searchText!:string;
  ngOnInit(): void {
  }
  @Output() searchingText:EventEmitter<string> = new EventEmitter<string>()
  search()
  {
    this.searchingText.emit(this.searchText)
    //console.log(this.searchText)
  }
}
