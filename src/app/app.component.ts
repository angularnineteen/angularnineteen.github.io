import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <p id="what-is-stale-news">
      We read and forget a lot of things every day.
      There is even more we don't get to read at all.
      Stale News is here so you can read old news.
    </p>
    <stale-news-card></stale-news-card> <!-- Use the selector of the new component -->
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      h1 {
        color: #2c3e50;
        font-family: Arial, sans-serif;
      }
      #what-is-stale-news {
        font-size: 1.2em;
        color: #34495e;
        margin: 20px 0;
      }
      router-outlet {
        display: block;
        margin-top: 20px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Stale News';
}
