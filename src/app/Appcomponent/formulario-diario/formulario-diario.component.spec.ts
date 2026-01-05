import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDiarioComponent } from './formulario-diario.component';

describe('FormularioDiarioComponent', () => {
  let component: FormularioDiarioComponent;
  let fixture: ComponentFixture<FormularioDiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioDiarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
