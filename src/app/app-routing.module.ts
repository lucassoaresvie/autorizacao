import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastroPage } from './contato/cadastro/cadastro.page';
import { ListarPage } from './contato/listar/listar.page';
import { SessaoPage } from './contato/sessao/sessao.page';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cadastro', component: CadastroPage },
   { path: 'listar', component: ListarPage },
  { path: 'sessao', component: SessaoPage },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
