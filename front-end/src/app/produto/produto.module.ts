import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TextMaskModule } from "angular2-text-mask";
import { NgBrazil } from 'ng-brazil';
import { NgxSpinnerModule } from "ngx-spinner";
//import { ImageCropperModule } from 'ngx-image-cropper';

import { ListaComponent } from "./lista/lista.component";
import { NovoComponent } from "./novo/novo.component.spec";
import { ProdutoAppComponent } from "./produto.app.component";
import { ProdutoRoutingModule } from "./produto.route";
import { ProdutoGuard } from "./services/produto.guard";
import { ProdutoResolve } from "./services/produto.resolve";
import { ProdutoService } from "./services/produto.service";

@NgModule({
    declarations: [
        ProdutoAppComponent,
        ListaComponent,
        NovoComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule,
        NgBrazil,
        TextMaskModule,
        NgxSpinnerModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        ProdutoService,
        ProdutoResolve,
        ProdutoGuard
    ]
})
export class ProdutoModule { }