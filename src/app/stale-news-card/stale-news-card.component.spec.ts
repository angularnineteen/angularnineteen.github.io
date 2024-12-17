import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaleNewsCardComponent } from './stale-news-card.component';
import { By } from '@angular/platform-browser';

describe('StaleNewsCardComponent', () => {
  let component: StaleNewsCardComponent;
  let fixture: ComponentFixture<StaleNewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaleNewsCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StaleNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    const titleElement = fixture.debugElement.query(By.css('h2'));
    expect(titleElement.nativeElement.textContent).toContain('Test Title');
  });

  it('should display the subtitle', () => {
    component.subtitle = 'Test Subtitle';
    fixture.detectChanges();
    const subtitleElement = fixture.debugElement.query(By.css('h3'));
    expect(subtitleElement.nativeElement.textContent).toContain('Test Subtitle');
  });

  it('should display the original publication date', () => {
    component.originalPublicationDate = '2023-01-01';
    fixture.detectChanges();
    const dateElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(dateElement.textContent).toContain('Published on: 2023-01-01');
  });

  it('should display the authors', () => {
    component.authors = ['Author One', 'Author Two'];
    fixture.detectChanges();
    const authorsElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(authorsElement.textContent).toContain('Author(s): Author One, Author Two');
  });

  it('should display the canonical URL', () => {
    component.canonicalUrl = 'https://example.com/article';
    fixture.detectChanges();
    const urlElement = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(urlElement.textContent).toContain('https://example.com/article');
    expect(urlElement.getAttribute('href')).toBe('https://example.com/article');
  });

  it('should display the republish date', () => {
    component.republishDate = '2023-02-01';
    fixture.detectChanges();
    const republishElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(republishElement.textContent).toContain('Republished on: 2023-02-01');
  });

  it('should display the summary', () => {
    component.summary = 'This is a summary of the article.';
    fixture.detectChanges();
    const summaryElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(summaryElement.textContent).toContain('Summary: This is a summary of the article.');
  });

  it('should display the long form text paragraphs', () => {
    component.longFormText = [
      'This is the first paragraph of the long form text.',
      'This is the second paragraph of the long form text.',
      'This is the third paragraph of the long form text.'
    ];
    fixture.detectChanges();
    const paragraphs = fixture.debugElement.queryAll(By.css('div > p'));
    expect(paragraphs.length).toBe(3);
    expect(paragraphs[0].nativeElement.textContent).toContain('This is the first paragraph of the long form text.');
    expect(paragraphs[1].nativeElement.textContent).toContain('This is the second paragraph of the long form text.');
    expect(paragraphs[2].nativeElement.textContent).toContain('This is the third paragraph of the long form text.');
  });
});
