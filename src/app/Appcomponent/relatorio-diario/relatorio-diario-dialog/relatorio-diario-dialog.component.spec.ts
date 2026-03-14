import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioDiarioDialogComponent } from './relatorio-diario-dialog.component';

describe('RelatorioDiarioDialogComponent', () => {
  let component: RelatorioDiarioDialogComponent;
  let fixture: ComponentFixture<RelatorioDiarioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioDiarioDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatorioDiarioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
