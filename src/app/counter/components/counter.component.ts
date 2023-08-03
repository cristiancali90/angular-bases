import { Component } from '@angular/core';
/*para que sea un componente debe tener el decorador de @component
y tener las propiedades de selector y template/templateUrl definidas para
que pueda ser utilizado, adicional agregar el componente en app.module.ts
*/
@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(+1)">+ 1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">- 1</button>

  `
})

export class CounterComponent{

  public counter: number = 10;

  increaseBy( value: number ): void{
    this.counter += value;
  }

  resetCounter(): void{
    this.counter = 10;
  }

}
