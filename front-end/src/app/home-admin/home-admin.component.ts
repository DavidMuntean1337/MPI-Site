import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home-admin',
  imports: [],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.scss'
})
export class HomeAdminComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }
  chapters = ['first-chapter', 'second-chapter', 'third-chapter', 'fourth-chapter', 'fifth-chapter', 'sixth-chapter', 'seventh-chapter', 'eighth-chapter', 'ninth-chapter'];

  goToChapter(index: number): void {
    this.router.navigate([`admin/${this.chapters[index]}`]);
  }
}
