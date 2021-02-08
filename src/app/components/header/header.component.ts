import { Component, OnInit } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {faWikipediaW} from '@fortawesome/free-brands-svg-icons/faWikipediaW';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faSearch = faSearch;
  faWikipediaW = faWikipediaW;

  constructor() { }

  ngOnInit(): void {
  }

}
