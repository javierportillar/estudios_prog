import { Component, OnChanges, SimpleChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { every } from 'rxjs';
import { products, person } from "./productList";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  imagHijo=''
  cont=0;
  contFuct:number|undefined;
  showImg=true;

 
  // products=products;
 

 
  
 /* FUNDAMENTOS 
 
   ngOnDestroy() {
    //delete render
    console.log('ngOnDestroy');
    window.clearInterval(this.contFuct);
  
  }
  constructor(){
    //before render
    //NO async -- once time 
    console.log('constructor','imgValue=>', this.showImg );
  }
  ngOnChanges(changes: SimpleChanges): void {
     //before - during render
    //changes inputs -- times
    console.log('ngOnChanges','imgValue=>', this.imagHijo );
  }
  ngOnInit() {
    //before render
    //asyn - fetch -- once time
    console.log('ngOnInit');
    //   this.contFuct= window.setInterval(()=>{
    //   this.cont+=1;
    //   console.log('Cont corrido');
    // },500)
  }
  ngAfterViewInit() {
    //after render
    //handle children (componentes hijos que reciben parametros)
    console.log('ngAfterViewInit');
  }



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

  onRegister(){
    console.log(this.person);
    
  }


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
  */
}
