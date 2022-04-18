import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasesStatsComponent } from './bases-stats.component';

describe('BasesStatsComponent', () => {
  let component: BasesStatsComponent;
  let fixture: ComponentFixture<BasesStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasesStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasesStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
