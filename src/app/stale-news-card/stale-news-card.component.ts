import {
  Component,
  input,
  signal,
  effect,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-stale-news-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card">
      <span>The following is for debugging only: {{ currentIndex() }}</span>
      <h2>{{ title() }}</h2>
      <h3>{{ subtitle() }}</h3>
      <p><strong>Published on: </strong> {{ originalPublicationDate() }}</p>
      <p><strong>Author(s): </strong> {{ authors().join(', ') }}</p>
      <p><strong>Canonical URL: </strong> <a [href]="canonicalUrl()" target="_blank">{{ canonicalUrl() }}</a></p>
      <p><strong>Republished on: </strong> {{ republishDate() }}</p>
      <p><strong>Summary: </strong> {{ summary() }}</p>
      <div>
        <strong>Details:</strong>
        <!-- <div *ngFor="let paragraph of longFormText"> -->
        <div>
          @for (item of longFormText(); track item; let idx = $index, e = $even) {
            <p>Item #{{ idx }}: {{ item }}</p>
          }
        </div>
      </div>
      <div class="increment-decrement-buttons">
        <button (click)="decrement()" class="btn">
          Decrement
        </button>

        <span>{{ currentIndex() }}</span>

        <button (click)="increment()" class="btn">
          Increment
        </button>
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
      .increment-decrement-buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 20px;
      }

      .btn {
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        background-color: #007bff;
        color: white;
        border-radius: 5px;
        cursor: pointer;
      }

      .btn:active {
        background-color: #0056b3;
      }

      span {
        font-size: 18px;
        margin: 0 10px;
      }

      @media (max-width: 600px) {
        .btn {
          padding: 15px 25px;
          font-size: 18px;
        }

        span {
          font-size: 20px;
        }
      }
    `
  ]
})
export class StaleNewsCardComponent {
  readonly title = input<string>('');
  readonly subtitle = input<string>('');
  readonly originalPublicationDate = input<string>('');
  readonly authors = input<string[]>([]);
  readonly canonicalUrl = input<string>('');
  readonly republishDate = input<string>('');
  readonly summary = input<string>('');
  readonly longFormText = input<string[]>([]); // Change to an array of strings
  readonly currentIndex = signal<number>(0);

  StaleNewsCardComponent() {
    const storedIndex = localStorage.getItem('currentIndex');
    console.log(storedIndex);
    if (storedIndex !== null) {
      this.currentIndex.set(Number(storedIndex));
    }

    effect(() => {
      console.info(`Now storing ${this.currentIndex().toString()} as the value for current index`);
      localStorage.setItem('currentIndex', this.currentIndex().toString());
    });
  }

  ngOnInit() {
    const storedIndex = localStorage.getItem('currentIndex');
    console.log(storedIndex);
    if (storedIndex !== null) {
      this.currentIndex.set(Number(storedIndex));
    }
  }

  increment() {
    const storedIndex = localStorage.getItem('currentIndex');
    console.log(storedIndex);
    if (storedIndex !== null) {
      this.currentIndex.set(Number(storedIndex));
    }
    this.currentIndex.update(value => value + 1);
    console.log(this.currentIndex());
    console.info(`Now storing ${this.currentIndex().toString()} as the value for current index`);
    localStorage.setItem('currentIndex', this.currentIndex().toString());
  }

  decrement() {
    const storedIndex = localStorage.getItem('currentIndex');
    console.log(storedIndex);
    if (storedIndex !== null) {
      this.currentIndex.set(Number(storedIndex));
    }
    this.currentIndex.update(value => value - 1);
    console.log(this.currentIndex());
    console.info(`Now storing ${this.currentIndex().toString()} as the value for current index`);
    localStorage.setItem('currentIndex', this.currentIndex().toString());
  }
}
