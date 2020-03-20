import { Component, OnInit, Input,Output,EventEmitter,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
})
export class IncrementadorComponent implements OnInit {
 @ViewChild('txtProgress') txtProgress:ElementRef
  @Input()  progreso:number=50;
 @Input() leyenda:string='Leyenda';
 @Output()  cambioValor:EventEmitter<Number>= new EventEmitter();
  constructor() {
    console.log(this.progreso);
    console.log(this.leyenda);
    
   }

  ngOnInit(): void {
  }

  onChanges(newValue:number){
console.log(newValue);
if(newValue>=100){
  this.progreso=100;
} else if(newValue<=0){
  this.progreso=0;
}else{
  this.progreso=newValue
}
this.txtProgress.nativeElement.value=this.progreso;
this.cambioValor.emit(this.progreso);
}

  valueChange(value) {
    if (this.progreso >= 100 && value >0) {
      this.progreso = 100;
      return
    } else if (this.progreso <= 0 && value < 0) {
      this.progreso = 0;
      return
    }
    this.progreso = this.progreso + value;
    console.log(this.progreso);
this.cambioValor.emit(this.progreso);
this.txtProgress.nativeElement.focus();
  }

}
