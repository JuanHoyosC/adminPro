import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent  {

  @Input() progreso: number = 0;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  //Color botones
  @Input() bgButton: string = 'btn-primary';

  //errores
  invalido: boolean = false;

  aumentar() {
    if(this.progreso === 100) return ;
    this.progreso+=5;
    this.invalido = false;
    this.cambioValor.emit(this.progreso);
  }

  disminuir() {
    if(this.progreso === 0 ) return ;
    this.progreso-=5;
    this.invalido = false;
    this.cambioValor.emit(this.progreso);
  }

  valor( valor ) {
    if(valor.length > 3 || valor > 100) {
      this.invalido = true;
      return ;
    }
    this.progreso = valor;
    this.invalido = false;
    this.cambioValor.emit(valor);
  }

}
