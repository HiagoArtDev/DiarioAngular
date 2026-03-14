import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);

// CONSERTAR DATA NO FORMULARIO / ELA NAO ESTA COLOCANDO O DATA CORRETA APOS O POST
// ACHAR UMA MANEIRA DE COLOLCAR OS SELECT LISTE EM UM LUGAR CENTRALIZADO
