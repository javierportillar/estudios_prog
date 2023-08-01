import { Component } from '@angular/core';
import { every } from 'rxjs';
import { products } from './productList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Javi';
  age = 23;
  img = 'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-06/OLIVEIRA_CHARLES_L_06-10.png?itok=vKMJlOYL';
  btnDisab = true;

  person = {
    nombre: 'Javier BBsote',
    edad: 23,
    avatar: 'https://instagram.fpso3-1.fna.fbcdn.net/v/t51.2885-19/329474968_146977984553265_320172528922702225_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fpso3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=v-tiRmdIY9MAX8zMp_e&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAFCE0ncRuy79pCkpNgLbuIxmUt7q5z16kksvCmJWT2QA&oe=64CD091F&_nc_sid=8b3546'
  }
  emojis = ['😂', '🐦', '🐳', '🌮', '💚', '👨‍👨‍👧‍👦']
  newEmoji = '';
  numeros: number[] = [1, 4, 5, 6, 3, 2, 3]
  


  buttonClick() {
    this.btnDisab = !this.btnDisab;
    console.log('Se precionó en buttonClick');
    this.age = this.age + 1;
  }
  edad_mas() {
    this.age = this.age + 1
    this.person.edad = this.person.edad + 1
  }
  scrollEvent(event: Event) { // Para recibir eventos, dentro de los parametros se usa (event:Event)
    const element = event.target as HTMLElement; // event.target porque se necesita el elemento HTML
    console.log(element.scrollTop);
  }
  keyUpEvent(event: Event) {
    const element = event.target as HTMLInputElement
    this.person.nombre = element.value;
  }

  addEmoji() {
    this.emojis.push(this.newEmoji)
    this.newEmoji = '';
  }
  delEmoji(i:number) {
    this.emojis.splice(i,1)
  }
}
