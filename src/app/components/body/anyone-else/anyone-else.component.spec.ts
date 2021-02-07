import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyoneElseComponent } from './anyone-else.component';

describe('AnyoneElseComponent', () => {
  let component: AnyoneElseComponent;
  let fixture: ComponentFixture<AnyoneElseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnyoneElseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyoneElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
