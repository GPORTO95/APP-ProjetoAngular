import { Injectable } from "@angular/core";
<<<<<<< HEAD
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LocalStorageUtils } from "src/app/utils/localstorage";
import { CadastroComponent } from "../cadastro/cadastro.component";

@Injectable()
export class ContaGuard implements CanDeactivate<CadastroComponent>, CanActivate {

    localStorageUtils = new LocalStorageUtils();

    constructor(private router: Router) { }

    canActivate() {
        if (this.localStorageUtils.obterTokenUsuario()) {
            this.router.navigate(['/home']);
        }

        return true;
    }

    canDeactivate(component: CadastroComponent) {
        if (component.mudancasNaoSalvas) {
=======
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CadastroComponent } from "../cadastro/cadastro.component";

@Injectable()
export class ContaGuard implements CanDeactivate<CadastroComponent> {
    
    canDeactivate(component: CadastroComponent) {
        if(component.mudancasNaoSalvas) {
>>>>>>> 467626ac5d3024e999871ab8c97acbd2b5771a8a
            return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulario?')
        }

        return true;
    }

}