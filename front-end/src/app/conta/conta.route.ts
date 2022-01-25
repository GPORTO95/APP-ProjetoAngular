import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CadastroComponent } from "./cadastro/cadastro.component";
import { ContaAppComponent } from "./conta.app.component";
import { LoginComponent } from "./login/login.component";
import { ContaGuard } from "./services/conta.guard";

const contaRouterConfig: Routes = [
    {
        path: '', component: ContaAppComponent,
        children: [
<<<<<<< HEAD
            { path: 'cadastro', component: CadastroComponent, canActivate: [ContaGuard], canDeactivate: [ContaGuard] },
            { path: 'login', component: LoginComponent, canActivate: [ContaGuard] }
=======
            { path: 'cadastro', component: CadastroComponent, canDeactivate: [ContaGuard] },
            { path: 'login', component: LoginComponent }
>>>>>>> 467626ac5d3024e999871ab8c97acbd2b5771a8a
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(contaRouterConfig)
    ],
    exports: [RouterModule]
})
export class ContaRoutingModule { }