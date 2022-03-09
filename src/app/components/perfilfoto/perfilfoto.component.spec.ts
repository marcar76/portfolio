import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilfotoComponent } from './perfilfoto.component';

describe('PerfilfotoComponent', () => {
  let component: PerfilfotoComponent;
  let fixture: ComponentFixture<PerfilfotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilfotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilfotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
