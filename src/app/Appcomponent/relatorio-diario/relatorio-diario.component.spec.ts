import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioDiarioComponent } from './relatorio-diario.component';

describe('RelatorioDiarioComponent', () => {
  let component: RelatorioDiarioComponent;
  let fixture: ComponentFixture<RelatorioDiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioDiarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatorioDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
