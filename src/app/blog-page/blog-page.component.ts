import { Component } from '@angular/core';
import { Post, BlogPostComponent } from '../blog-post/blog-post.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [BlogPostComponent, NgFor],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent {

  posts: Post[] = [
    {
      title: "Portfolio Page",
      date: "03.08.2024",
      contents: "Create a Portfolio Page that acts as a framework for all upcoming projects.",
    },
    {
      title: "Portfolio Page",
      date: "03.08.2024",
      contents: "Create a Portfolio Page that acts as a framework for all upcoming projects.",
    }
  ]
}
