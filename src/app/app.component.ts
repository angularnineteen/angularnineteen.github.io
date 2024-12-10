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
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'Stale News';
}
