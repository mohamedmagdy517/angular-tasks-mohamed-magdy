import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContebtComponent } from './main-contebt.component';

describe('MainContebtComponent', () => {
  let component: MainContebtComponent;
  let fixture: ComponentFixture<MainContebtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContebtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
