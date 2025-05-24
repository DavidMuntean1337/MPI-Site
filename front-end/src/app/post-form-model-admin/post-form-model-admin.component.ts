import {Component, OnInit} from '@angular/core';
import {NgSwitch, NgSwitchCase} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { format } from 'date-fns';

@Component({
  selector: 'app-post-form-model-admin',
  imports: [
    NgSwitchCase,
    NgSwitch
  ],
  templateUrl: './post-form-model-admin.component.html',
  styleUrl: './post-form-model-admin.component.scss'
})
export class PostFormModelAdminComponent implements OnInit{
  postId: string | null = null;
  post: any;
  chapter: string | null = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.chapter = this.route.snapshot.paramMap.get('chapter');
    console.log(this.postId, this.chapter)
    this.fetchPost();
  }

  fetchPost() {
    this.http.get(`http://localhost:3000/get-posts/${this.chapter}/${this.postId}`).subscribe({
      next: (data: any) => {
        this.post = data;
        console.log('Post loaded', data);
      },
      error: err => console.error('Error loading post', err),
    });
  }

  protected readonly format = format;
}
