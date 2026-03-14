import { Component, Inject } from '@angular/core';

import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';

import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-relatorio-diario-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
  ],
  templateUrl: './relatorio-diario-dialog.component.html',
  styleUrls: ['./relatorio-diario-dialog.component.css'],
})
export class RelatorioDiarioDialogComponent {
  // form!: FormGroup;

  registroForm: FormGroup;

  horasSono = ['6', '7', '8', '9'];

  cafeManha: string[] = [
    'Vitamina',
    'Fruta',
    'Sanduiche Natural',
    'Iorgute',
    'Pão de Sal',
  ];

  almoco: string[] = [
    'Arroz',
    'Salada',
    'Frango',
    'Peixe',
    'Bisteca',
    'Coração',
    'Carne',
    'Ovo',
    'Feijão',
    'Pure',
    'Batata',
    'Batata-Frita',
    'Linguiça-Frita',
    'Fritura',
    'Carne Vermelha',
    'Macarrão',
    'Nada',
  ];

  lanche: string[] = [
    'Vitamina',
    'Fruta',
    'Sanduiche Natural',
    'Iorgute',
    'Ovo',
    'Pizza',
    'Hamburguer',
    'Coca-Cola',
    'Pão de Sal',
    'Motadela',
    'Quejo Mussarela',
    'Nada',
  ];

  janta: string[] = [
    'Arroz',
    'Salada',
    'Feijão',
    'Frango',
    'Peixe',
    'Bisteca',
    'Coração',
    'Carne',
    'Ovo',
    'Pure',
    'Batata',
    'Batata-Frita',
    'Linguiça-Frita',
    'Fritura',
    'Carne Vermelha',
    'Macarrão',
    'Nada',
  ];

  saude: string[] = [
    'Whey',
    'Creatina',
    'Omega3',
    'Hidratação',
    'LowCarb',
    'HighProtein',
    'Nada',
  ];

  atividadefisica: string[] = [
    'Academia',
    'Correr',
    'HIT',
    'FUT',
    'Calistenia',
    'Nada',
  ];

  estudoHoras = ['0', '1', '2', '3', '4'];

  jogos: string[] = ['Chess', 'Rivals', 'BF6', 'Outros'];

  distracao = ['Sim', 'Não'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RelatorioDiarioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.registroForm = this.fb.group({
      dataRegistro: [new Date(), Validators.required],
      horasSono: [null, [Validators.required, Validators.min(0)]],
      cafeManha: [null, Validators.required],
      almoco: [null, Validators.required],
      lanche: [null, Validators.required],
      janta: [null, Validators.required],
      saude: [null, Validators.required],
      atividadefisica: [null, Validators.required],
      estudoHoras: [null, [Validators.required, Validators.min(0)]],
      jogos: [null, Validators.required],
      distracao: [null, Validators.required],
      gastosTotal: [null, [Validators.required, Validators.min(0)]],
      observacoes: [null, Validators.required],
    });
  }

  ngOnInit() {
    console.log(this.data);

    // this.registroForm = this.fb.group({
    //   registroID: [this.data.registroID],
    // nome: [this.data.nome],
    // descricao: [this.data.descricao],
    // data: [this.data.data],
    // });
  }

  // salvar() {
  //   if (this.form.valid) {
  //     this.dialogRef.close(this.form.value);
  //   }
  // }

  fechar() {
    this.dialogRef.close();
  }

  salvar() {
    if (this.registroForm.valid) {
      const dadosBrutos = this.registroForm.value;

      // 2. Formatamos para o padrão que as APIs geralmente esperam (ISO 8601)
      const dadosParaEnvio = {
        ...dadosBrutos,
        cafeManha: this.registroForm.value.cafeManha.join(', '),
        almoco: this.registroForm.value.almoco.join(', '),
        lanche: this.registroForm.value.lanche.join(', '),
        janta: this.registroForm.value.janta.join(', '),
        saude: this.registroForm.value.saude.join(', '),
        atividadefisica: this.registroForm.value.atividadefisica.join(', '),
        jogos: this.registroForm.value.jogos.join(', '),
        distracao: this.registroForm.value.distracao.join(', '),
        // Converte Date object para "2026-01-04T23:50:34.000Z"
        dataRegistro: dadosBrutos.dataRegistro.toISOString(),
        // Garante que números sejam números (caso o input tenha retornado string)
        horasSono: Number(dadosBrutos.horasSono),
        estudoHoras: Number(dadosBrutos.estudoHoras),
        gastosTotal: Number(dadosBrutos.gastosTotal),
      };

      // this.relatorioService.enviarRelatorio(dadosParaEnvio).subscribe({
      //   next: (res) => {
      //     this.snackBar.open('Relatório salvo com sucesso!', 'Fechar', {
      //       duration: 5000,
      //     });
      //     // this.registroForm.reset(); // Opcional: limpa o form após sucesso
      //     this.resetform(); //limpa o form após sucesso
      //   },
      //   error: (err) => {
      //     console.error('Erro na API:', err);
      //     this.snackBar.open('Erro ao salvar relatório.', 'Fechar', {
      //       duration: 5000,
      //     });
      //   },
      // });

      this.dialogRef.close(this.registroForm.value);

      console.log('JSON pronto para API:', dadosParaEnvio);
    }
  }
}
