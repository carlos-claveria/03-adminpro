import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso = 50;
  @Input() btnClass : string = 'btn-light'; 

  @Output() valorSalida : EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    this.btnClass = 'btn '+ this.btnClass;

  }


  cambiaValor( valor : number) {

    this.progreso = this.checkValor(this.progreso + valor);
    this.valorSalida.emit(this.progreso);
    
  }
  
  onChange( valor : number ) {
    
    this.progreso = this.checkValor( valor);
    this.valorSalida.emit(this.progreso);

  }

  checkValor( nuevoValor : number) : number {


    if (nuevoValor >= 100) return  100;
    
    if ( (nuevoValor <= 0) || (isNaN(nuevoValor)) )  return 0;

    return nuevoValor;

  }
 

}
