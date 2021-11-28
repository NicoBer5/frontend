import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionUComponent } from './identificacion-u.component';

describe('IdentificacionUComponent', () => {
  let component: IdentificacionUComponent;
  let fixture: ComponentFixture<IdentificacionUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificacionUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificacionUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
