import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperazioniCrudComponent } from './operazioni-crud.component';

describe('OperazioniCrudComponent', () => {
  let component: OperazioniCrudComponent;
  let fixture: ComponentFixture<OperazioniCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperazioniCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperazioniCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
