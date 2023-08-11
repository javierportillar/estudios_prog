import { Component,Input, Output, EventEmitter} from '@angular/core';
import { person } from "../../productList";

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
 @Input() imag : string = ''
 @Output() loaded = new EventEmitter<string>();
 imgDefault=person.avatar;
 eventError(){
  this.imag=this.imgDefault;
 }
 eventLoad(){
  console.log('Log componente img');
  this.loaded.emit(this.imag);
 }
}


