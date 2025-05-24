import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }
  chapters = ['first-chapter', 'second-chapter', 'third-chapter', 'fourth-chapter', 'fifth-chapter', 'sixth-chapter', 'seventh-chapter', 'eighth-chapter', 'ninth-chapter'];

  goToChapter(index: number): void {
    this.router.navigate([`/${this.chapters[index]}`]);
  }
}
