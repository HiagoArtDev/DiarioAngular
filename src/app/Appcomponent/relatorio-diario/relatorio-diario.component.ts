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

  constructor(private relatorioService: RelatorioService) {}

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
    this.relatorioService.getTabelaRelatorio().subscribe({
      next: (res) => {
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

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
