import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComponentesComponent } from './login/login.component';
import { ListaCategoriaComponent } from './categorias/lista-categoria/lista-categoria.component';
import { CadastroUsuarioComponent } from './usuarios/cadastro-usuario/cadastro-usuario.component';

export const routes: Routes = [
    {path: "", redirectTo: "/login", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "login", component: ComponentesComponent},
    {path: "categorias", component: ListaCategoriaComponent},
    {path: "cadastrar", component: CadastroUsuarioComponent},
    {path: "**", redirectTo: "/login"} // redirecionar qualquer rota nao esxistente redirecionara para o login 
];
