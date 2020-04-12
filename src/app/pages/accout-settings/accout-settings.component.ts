import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';
@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
})
export class AccoutSettingsComponent implements OnInit {

  constructor(
     public _ajustes: SettingsService,
     ) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor(tema:string,link:any){
    this.aplicarCheck(link);
    console.log(tema);
    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck(link:any){
   let selectores:any =document.getElementsByClassName('selector')
   for(let ref of selectores){
     ref.classList.remove('working');
   }
   link.classList.add('working');
  }

  colocarCheck(){
   let selectores:any =document.getElementsByClassName('selector')
   let tema=this._ajustes.ajustes.tema;
   for(let ref of selectores){
      if(ref.getAttribute('data-theme') == tema){
        ref.classList.add('working');
        break;
      }
   }
  }

}
