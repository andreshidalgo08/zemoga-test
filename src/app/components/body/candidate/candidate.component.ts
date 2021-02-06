import {Component, Input, OnInit} from '@angular/core';
import {Candidate} from '../../../models/candidate';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  @Input() candidate: Candidate;

  likesPercentage = 60;
  dislikesPercentage = 40;

  constructor() { }

  ngOnInit(): void {
  }

}
