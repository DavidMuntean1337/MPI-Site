import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CreatePostService} from '../create-post.service';
import {ActivatedRoute} from '@angular/router';
import {NgSwitch, NgSwitchCase} from '@angular/common';

@Component({
  selector: 'app-create-post-form',
  imports: [
    FormsModule,
    NgSwitch,
    NgSwitchCase
  ],
  templateUrl: './create-post-form.component.html',
  styleUrl: './create-post-form.component.scss'
})
export class CreatePostFormComponent implements OnInit {
  chapter: string | null = '';
  newBlockType: string = 'TITLE';
  post = {
    blocks: [] as { type: string; value: any }[]
  };

  constructor(public createPostService: CreatePostService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.chapter = params.get('chapter');
      console.log('Current chapter: ', this.chapter);
    });
  }

  addBlock(): void {
    const newBlock = { type: this.newBlockType, value: this.newBlockType === 'IMAGE' ? null : '' };
    this.post.blocks.push(newBlock);
  }

  removeBlock(index: number) {
    this.post.blocks.splice(index, 1);
  }

  onFileSelected(event: Event, blockIndex: number): void {
    this.createPostService.handleFileSelection(event, (updatedImageUrls) => {
      if (updatedImageUrls.length > 0) {
        this.post.blocks[blockIndex].value = updatedImageUrls[0];
        console.log('Image block updated:', this.post.blocks[blockIndex]);
      }
    });
  }

  onCreate(): void {
    const postData = {
      chapter: this.chapter,
      blocks: this.post.blocks.map(block => ({
        type: block.type,
        value: block.value,
      }))
    };

    this.createPostService.onCreate(postData).subscribe({
      next: (response) => {
        alert("Post created successfully!");
        console.log('Post created', response);
      },
      error: (err) => console.error('Error creating post:', err)
    });
  }

  protected readonly document = document;
}
