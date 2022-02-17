import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSecVersionComponent } from './grid-sec-version.component';

describe('GridSecVersionComponent', () => {
  let component: GridSecVersionComponent;
  let fixture: ComponentFixture<GridSecVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridSecVersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSecVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
