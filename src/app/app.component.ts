import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StaleNewsCardComponent } from './stale-news-card/stale-news-card.component';

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
    `
      /* Global Styles */
      :host {
        display: block;
        font-family: 'Arial', sans-serif; /* Use a sans-serif font */
        line-height: 1.6; /* Improve readability */
        margin: 0;
        padding: 20px;
        background-color: #f9f9f9; /* Light background color */
        color: #333; /* Dark text color */
      }

      h1 {
        font-size: 2.5em; /* Larger font size for the main heading */
        margin-bottom: 20px; /* Space below the heading */
        color: #2c3e50; /* Darker color for the heading */
      }

      p {
        font-size: 1.2em; /* Slightly larger font size for paragraphs */
        margin-bottom: 15px; /* Space below paragraphs */
      }

      a {
        color: #007bff; /* Link color */
        text-decoration: none; /* Remove underline */
      }

      a:hover {
        text-decoration: underline; /* Underline on hover */
      }

      /* Card Styles */
      app-stale-news-card {
        margin-top: 20px; /* Space above the card */
      }
    `
  ]
})
export class AppComponent {
  title = 'Stale News';
}
