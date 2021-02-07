import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {
  title = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    switch (this.router.url) {
      case '/past-trials':
        this.title = 'Past Trials';
        break;
      case '/how-it-works':
        this.title = 'How It Works';
        break;
      default:
        this.title = 'Blank Page';
        break;
    }
  }

}
