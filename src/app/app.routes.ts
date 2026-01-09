import { Routes } from '@angular/router';
import path from 'path';
import { FormularioDiarioComponent } from './Appcomponent/formulario-diario/formulario-diario.component';
import { RelatorioDiarioComponent } from './Appcomponent/relatorio-diario/relatorio-diario.component';

export const routes: Routes = [
    {path:'formulario-diario', component:FormularioDiarioComponent},
    {path:'relatorio-diario', component:RelatorioDiarioComponent}
];
