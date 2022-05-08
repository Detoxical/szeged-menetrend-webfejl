import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenetrendComponent } from './menetrend.component';

describe('MenetrendComponent', () => {
  let component: MenetrendComponent;
  let fixture: ComponentFixture<MenetrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenetrendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenetrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
