import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RelatorioService } from '../../services/relatorio.service';

import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip'; // 1. Importe o módulo

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatDialog } from '@angular/material/dialog';
import { RelatorioDiarioDialogComponent } from '../relatorio-diario/relatorio-diario-dialog/relatorio-diario-dialog.component';

@Component({
  selector: 'app-relatorio-diario',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './relatorio-diario.component.html',
  styleUrl: './relatorio-diario.component.css',
})
export class RelatorioDiarioComponent implements OnInit {
  // Defina as colunas que deseja exibir (devem coincidir com o matColumnDef no HTML)
  displayedColumns: string[] = [
    'dataRegistro',
    'horasSono',
    'cafeManha',
    'almoco',
    'lanche',
    'janta',
    'saude',
    'atividadeFisica',
    'estudoHoras',
    'jogos',
    'distracao',
    'gastosTotal',
    'acoes',
  ];

  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  loading: boolean = false;

  constructor(
    private relatorioService: RelatorioService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getListRelatorioDiario();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getListRelatorioDiario() {
    this.loading = true; // inicia spinner

    this.relatorioService.getTabelaRelatorio().subscribe({
      next: (res) => {
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.loading = false; // para spinner

        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  editarRegistro(row: any) {
    console.log('Editando registro:', row.registroID);
    // Aqui você poderia abrir um Dialog ou navegar para a página de edição

    const dialogRef = this.dialog.open(RelatorioDiarioDialogComponent, {
      width: '1200px',
      data: row,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Dados editados', result);

        // chamar API update aqui

        this.getListRelatorioDiario();
      }
    });
  }

  excluirRegistro(row: any) {
    if (
      confirm(`Deseja realmente excluir o registro do dia ${row.dataRegistro}?`)
    ) {
      console.log('Excluindo ID:', row.registroID);
      // Chame seu serviço de exclusão aqui
    }
  }
}
