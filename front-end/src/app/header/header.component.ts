import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterOutlet
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public router: Router) {}
  public hovered: boolean = false;
  chapters = ['first-chapter', 'second-chapter', 'third-chapter', 'fourth-chapter', 'fifth-chapter', 'sixth-chapter', 'seventh-chapter', 'eighth-chapter', 'ninth-chapter'];

  isAdminRoute(): boolean {
    return this.router.url.startsWith('/admin');
  }

  goToHome(): void {
    if (this.isAdminRoute()) {
      this.router.navigate(['admin/home']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  goToChapter(index: number): void {
    if (this.isAdminRoute()) {
      this.router.navigate([`admin/${this.chapters[index]}`]);
    } else {
      this.router.navigate([`/${this.chapters[index]}`]);
    }
  }

  goToPostCreation(): void {
    if (this.isAdminRoute()) {
      const currentUrl = this.router.url;
      const urlParts = currentUrl.split('/');
      const chapter = urlParts[2];
      if (chapter === 'home') {
        alert('Thung Thung Thung Sahur');
        return;
      } else {
        this.router.navigate([`admin/create-post`, chapter]);
      }
    }
  }
}
