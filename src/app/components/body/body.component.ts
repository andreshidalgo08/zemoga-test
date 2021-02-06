import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Candidate} from '../../models/candidate';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  candidates: Candidate[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getInitialData().subscribe(
      data => {
        this.candidates = data.candidates;
      },
      error => {
        console.log(error);
      });
  }

}
