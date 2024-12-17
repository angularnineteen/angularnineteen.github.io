import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaleNewsCardComponent } from './stale-news-card.component';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { By } from '@angular/platform-browser';

describe('StaleNewsCardComponent', () => {
  let component: StaleNewsCardComponent;
  let fixture: ComponentFixture<StaleNewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule], // Add CommonModule here
      declarations: [StaleNewsCardComponent] // Declare the component
    })
      .compileComponents();

    fixture = TestBed.createComponent(StaleNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more tests as needed
});
