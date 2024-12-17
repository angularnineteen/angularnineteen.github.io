import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaleNewsCardComponent } from './stale-news-card.component';

import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

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
});
