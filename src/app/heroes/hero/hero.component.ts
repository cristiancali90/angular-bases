import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  /*la palabra reservada get hace que un metodo se comporte como una propiedad,
   con esto se puede interpolar en el html*/
   get capitalizedName(): string{
    return this.name.toUpperCase();
   }

   getHeroDescription(): string{
      return `${ this.name } - ${ this.age }`;
   }

   changeHero(): void{
    this.name = 'Super Martin';
   }

   changeAge(): void{
      this.age = 33;
   }

   resetValues(): void{
    this.name = 'ironman';
    this.age = 45;
   }

}
