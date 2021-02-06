import {Component, Input, OnInit} from '@angular/core';
import {Candidate} from '../../../models/candidate';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  @Input() candidate: Candidate;

  likesPercentage = 0;
  dislikesPercentage = 0;
  likeClicked = false;
  dislikeClicked = false;
  voted = false;

  constructor() { }

  ngOnInit(): void {
    const likesPromise = localStorage.getItem(`${this.candidate.id}-likes`);
    const dislikesPromise = localStorage.getItem(`${this.candidate.id}-dislikes`);

    Promise.all([likesPromise, dislikesPromise])
      .then(values => {
        this.candidate.likes = values[0] ? +values[0] : 0;
        this.candidate.dislikes = values[1] ? +values[1] : 0;

        this.calculatePercentages();
    });
  }

  calculatePercentages(): void {
    if (this.candidate.likes > 0 || this.candidate.dislikes > 0) {
      this.likesPercentage = +(this.candidate.likes / (this.candidate.likes + this.candidate.dislikes) * 100).toFixed(0);
      this.dislikesPercentage = 100 - this.likesPercentage;
    }
  }

  clickLike(): void {
    this.likeClicked = true;
    this.dislikeClicked = false;
  }

  clickDislike(): void {
    this.likeClicked = false;
    this.dislikeClicked = true;
  }

  vote(): void {
    if (this.likeClicked) {
      this.candidate.likes += 1;
      localStorage.setItem(`${this.candidate.id}-likes`, '' + this.candidate.likes);
      this.voted = true;

      this.calculatePercentages();
    }

    if (this.dislikeClicked) {
      this.candidate.dislikes += 1;
      localStorage.setItem(`${this.candidate.id}-dislikes`, '' + this.candidate.dislikes);
      this.voted = true;

      this.calculatePercentages();
    }
  }

}
