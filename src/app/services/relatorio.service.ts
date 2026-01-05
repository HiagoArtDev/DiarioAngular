import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RelatorioService {
  private readonly API_URL = 'https://localhost:7298/api/RelatorioDiario/FormularioDiario';

  constructor(private http: HttpClient) {}

  enviarRelatorio(dados: any): Observable<any> {
    return this.http.post(this.API_URL, dados);
  }
}