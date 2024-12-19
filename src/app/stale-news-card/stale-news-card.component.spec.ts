import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaleNewsCardComponent } from './stale-news-card.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { CommonModule } from '@angular/common';

describe('StaleNewsCardComponent', () => {
  let component: StaleNewsCardComponent;
  let fixture: ComponentFixture<StaleNewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [StaleNewsCardComponent],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaleNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render title and subtitle', () => {
    component.title = 'Test Title';
    component.subtitle = 'Test Subtitle';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Test Title');
    expect(compiled.querySelector('h3')?.textContent).toContain('Test Subtitle');
  });

  it('should render authors', () => {
    component.authors = ['Author One', 'Author Two'];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Author One, Author Two');
  });

  it('should render canonical URL', () => {
    component.canonicalUrl = 'https://example.com';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('a') as HTMLAnchorElement;
    expect(link.href).toBe('https://example.com/');
    expect(link.textContent).toBe('https://example.com');
  });

  it('should render long form text', () => {
    component.longFormText = ['Paragraph 1', 'Paragraph 2'];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const paragraphs = compiled.querySelectorAll('p');
    expect(paragraphs[5].textContent).toContain('Item #0: Paragraph 1');
    expect(paragraphs[6].textContent).toContain('Item #1: Paragraph 2');
  });

  it('should handle empty long form text', () => {
    component.longFormText = [];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const paragraphs = compiled.querySelectorAll('p');
    expect(paragraphs.length).toBe(5); // Only the static paragraphs should be rendered
  });
});
