import { Component,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
 @Input() imag : string = ''
 @Output() loaded = new EventEmitter<string>();
 imgDefault='https://lh3.googleusercontent.com/a/AAcHTteI2rBs93Fn-8VkSl-D8trS9Lkwr9Dvx6on4hPSUcfKRz0=s288-c-rg-br100'
 eventError(){
  this.imag=this.imgDefault;
 }
 eventLoad(){
  console.log('Log Hijo');
  this.loaded.emit(this.imag);
 }
}


