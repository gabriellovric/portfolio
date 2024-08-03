import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogPageComponent } from "./blog-page/blog-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
