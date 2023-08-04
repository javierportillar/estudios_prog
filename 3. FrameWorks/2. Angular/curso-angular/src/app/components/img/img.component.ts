import { Component,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
 @Input() imag : string = ''
 @Output() loaded = new EventEmitter<string>();
 imgDefault='https://scontent.fpso3-1.fna.fbcdn.net/v/t39.30808-6/332099782_486991123454675_3470781213303915433_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEcDx8NHy6r9hSxhPX8vQrk0rHI6XB7Sj7SscjpcHtKPm6fu09XUj2sCUyf4EcPh_Qh-0Er3oVQiK6BUlpTbf13&_nc_ohc=aIuwZmy23a0AX8GG5Wa&_nc_ht=scontent.fpso3-1.fna&oh=00_AfAJta6DmDV_7Qo-RWwWGVy4Esgk8SCZpllkbNFFUMIwfQ&oe=64D0D153'
 eventError(){
  this.imag=this.imgDefault;
 }
 eventLoad(){
  console.log('Log Hijo');
  this.loaded.emit(this.imag);
 }
}