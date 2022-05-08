import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JarataddComponent } from './jaratadd.component';

describe('JarataddComponent', () => {
  let component: JarataddComponent;
  let fixture: ComponentFixture<JarataddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JarataddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JarataddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
