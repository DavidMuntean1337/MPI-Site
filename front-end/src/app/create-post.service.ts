import { Injectable } from '@angular/core';
import {Observable, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  constructor(private http: HttpClient, public router: Router) { }

  uploadImage(file: File): Observable<{ url: string }> {
    const formData = new FormData();
    formData.append('image', file);

    return this.http.post<{ url: string }>('http://localhost:3000/admin/create-post/uploads', formData);
  }

  handleFileSelection(
    event: Event,
    callback: (imageUrls: string[]) => void,
    existingImages: string[] = []
  ): void {
    const fileInput = event.target as HTMLInputElement;
    const files = fileInput?.files;

    if (files) {
      const newImageUrls: string[] = [...existingImages];
      Array.from(files).forEach((file) => {
        this.uploadImage(file).subscribe({
          next: (response) => {
            newImageUrls.push(response.url);
            callback(newImageUrls);
          },
          error: (err) => console.error('Upload failed bum:', err),
        });
      });
    }
  }

  onCreate(post: { chapter: string | null, blocks: { type: string, value: string }[] }): Observable<any> {
    return this.http.post(`http://localhost:3000/admin/create-post/${post.chapter}`, post);
  }
}
