import { Component, Input } from '@angular/core';

export interface Post {
  title: string;
  contents: string;
  date: string
}

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {
  @Input({required: true}) post!: Post;
}
