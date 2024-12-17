import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StaleNewsCardComponent } from './stale-news-card/stale-news-card.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StaleNewsCardComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <p id="what-is-stale-news">
      We read and forget a lot of things every day.
      There is even more we don't get to read at all.
      Stale News is here so you can read old news.
    </p>
    <app-stale-news-card
      [title]="'Sample Title'"
      [subtitle]="'Sample Subtitle'"
      [originalPublicationDate]="'2023-01-01'"
      [authors]="['Author One', 'Author Two']"
      [canonicalUrl]="'https://example.com/article'"
      [republishDate]="'2023-02-01'"
      [summary]="'This is a summary of the article.'"
      [longFormText]="[
        'This is the first paragraph of the long form text.',
        'This is the second paragraph of the long form text.',
        'This is the third paragraph of the long form text.'
      ]">
    </app-stale-news-card>
    <router-outlet></router-outlet>
  `,
  styles: [
    

  ]
})
export class AppComponent {
  title = 'Stale News';
}
