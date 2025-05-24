import {Component, OnInit} from '@angular/core';
import {NgSwitch, NgSwitchCase} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-first-chapter',
  imports: [
    NgSwitchCase,
    NgSwitch
  ],
  templateUrl: './first-chapter.component.html',
  styleUrl: './first-chapter.component.scss'
})
export class FirstChapterComponent implements OnInit{
  posts: any[] = [];
  chapter: string | null = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.chapter = params.get('chapter');
      console.log('Chapter changed:', this.chapter);
      this.fetchPosts();
    });
  }

  fetchPosts() {
    this.http.get(`http://localhost:3000/get-posts/${this.chapter}`).subscribe({
      next: (data: any) => {
        this.posts = data;
        console.log('Post loaded', data);
      },
      error: err => console.error('Error loading post', err),
    });
  }

  goToPost(id: string) {
    this.router.navigate([`/${this.chapter}`, id]);
  }
}
