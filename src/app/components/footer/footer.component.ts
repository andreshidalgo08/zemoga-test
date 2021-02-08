import {Component, OnInit} from '@angular/core';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faFacebookSquare = faFacebookSquare;
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
