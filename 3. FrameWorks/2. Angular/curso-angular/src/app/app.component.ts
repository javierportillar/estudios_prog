import { Component } from '@angular/core';
import { every } from 'rxjs';
import { products } from "./productList";
import { person } from "./productList";
import { box } from "./productList";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  withImg=10;
  name = 'Javi';
  age = 23;
  img = 'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-06/OLIVEIRA_CHARLES_L_06-10.png?itok=vKMJlOYL';
  btnDisab = true;

 
  emojis = ['😂', '🐦', '🐳', '🌮', '💚', '👨‍👨‍👧‍👦']
  newEmoji = '';
  numeros: number[] = [1, 4, 5, 6, 3, 2, 3]
  
  products= products;
  person=person;
  box=box;

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
