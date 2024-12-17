import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaleNewsCardComponent } from './stale-news-card.component';

import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from '../app.component';

describe('StaleNewsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, StaleNewsCardComponent], // Import the standalone component
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
