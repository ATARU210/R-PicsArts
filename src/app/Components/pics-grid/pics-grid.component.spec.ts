import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicsGridComponent } from './pics-grid.component';

describe('PicsGridComponent', () => {
  let component: PicsGridComponent;
  let fixture: ComponentFixture<PicsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicsGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
