import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaleNewsCardComponent } from './stale-news-card.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentFixtureAutoDetect } from '@angular/core/testing';

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [StaleNewsCardComponent],
    providers: [
      { provide: ComponentFixtureAutoDetect, useValue: true }
    ],
  }).compileComponents();
});

describe('StaleNewsCardComponent', () => {
  let component: StaleNewsCardComponent;
  let fixture: ComponentFixture<StaleNewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, StaleNewsCardComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
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

  it('should handle empty long form text', async () => {
    component.longFormText = [];
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const paragraphs = compiled.querySelectorAll('p');
    expect(paragraphs.length).toBe(5); // Only the static paragraphs should be rendered
  });

  it('should handle empty title', async () => {
    component.title = '';
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const titles = compiled.querySelectorAll('h2');
    expect(titles.length).toBe(1);
    const title = titles[0];
    expect(title.textContent).toBe('');
  });

  it('should handle Lorem Ipsum title', async () => {
    // Delay the property update to simulate an asynchronous operation
    await Promise.resolve().then(() => {
      component.title = 'Lorem Ipsum';
      fixture.detectChanges(); // Trigger manual change detection
    });

    // Assert the DOM updates
    const compiled = fixture.nativeElement as HTMLElement;
    const titles = compiled.querySelectorAll('h2');
    expect(titles.length).toBe(1);
    const title = titles[0];
    expect(title.textContent).toBe('Lorem Ipsum');
  });


});
