import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchText:string="";

  @Output() filter:EventEmitter<string> = new EventEmitter<string>()

  search()
  {
    this.filter.emit(this.searchText)
  }
}
