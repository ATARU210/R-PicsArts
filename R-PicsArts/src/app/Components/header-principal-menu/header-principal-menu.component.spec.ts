import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPrincipalMenuComponent } from './header-principal-menu.component';

describe('HeaderPrincipalMenuComponent', () => {
  let component: HeaderPrincipalMenuComponent;
  let fixture: ComponentFixture<HeaderPrincipalMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPrincipalMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPrincipalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
