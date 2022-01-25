import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FornecedorAppComponent } from "./fornecedor.app.component";
import { FornecedorRoutingModule } from "./fornecedor.route";
import { ListaComponent } from "./lista/lista.component";
import { FornecedorService } from "./services/fornecedor.service";

@NgModule({
    declarations: [
      FornecedorAppComponent,
      ListaComponent
    ],
    imports: [
      CommonModule,
      FornecedorRoutingModule,
      FormsModule
    ],
    providers: [
      FornecedorService
    ]
  })
  export class FornecedorModule { }