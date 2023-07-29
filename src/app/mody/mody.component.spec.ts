import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModyComponent } from './mody.component';

describe('ModyComponent', () => {
  let component: ModyComponent;
  let fixture: ComponentFixture<ModyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
