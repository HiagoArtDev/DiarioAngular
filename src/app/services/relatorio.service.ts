import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RelatorioService {
  //LOCALHOST
  // private readonly API_URL_FORM =
  //   'https://localhost:7298/api/RelatorioDiario/FormularioDiario';

  // LOCALHOST
  // private readonly API_URL_LIST = 'https://localhost:7298/api/RelatorioDiario/RelatorioDiario';

  // IIS
  private readonly API_URL_LIST =
    'http://localhost:8081/api/RelatorioDiario/RelatorioDiario';

  //LOCALHOST
  private readonly API_URL_FORM =
    'http://localhost:8081/api/RelatorioDiario/FormularioDiario';

  constructor(private http: HttpClient) {}

  enviarRelatorio(dados: any): Observable<any> {
    return this.http.post(this.API_URL_FORM, dados);
  }

  getTabelaRelatorio(): Observable<any> {
    return this.http.get(this.API_URL_LIST);
  }
}
