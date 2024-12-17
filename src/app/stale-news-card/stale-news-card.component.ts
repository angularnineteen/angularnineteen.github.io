import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stale-news-card',
  template: `
    <div class="card">
      <h2>{{ title }}</h2>
      <h3>{{ subtitle }}</h3>
      <p><strong>Published on:</strong> {{ originalPublicationDate }}</p>
      <p><strong>Author(s):</strong> {{ authors.join(', ') }}</p>
      <p><strong>Canonical URL:</strong> <a [href]="canonicalUrl" target="_blank">{{ canonicalUrl }}</a></p>
      <p><strong>Republished on:</strong> {{ republishDate }}</p>
      <p><strong>Summary:</strong> {{ summary }}</p>
      <div>
        <strong>Details:</strong>
        <div @for="let paragraph of longFormText">
          <p>{{ paragraph }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        margin: 16px 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      h2 {
        margin: 0;
        font-size: 1.5em;
      }
      h3 {
        margin: 0;
        font-size: 1.2em;
        color: #555;
      }
      p {
        margin: 8px 0;
      }
      a {
        color: #007bff;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    `
  ]
})
export class StaleNewsCardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() originalPublicationDate: string = '';
  @Input() authors: string[] = [];
  @Input() canonicalUrl: string = '';
  @Input() republishDate: string = '';
  @Input() summary: string = '';
  @Input() longFormText: string[] = []; // Change to an array of strings
}
