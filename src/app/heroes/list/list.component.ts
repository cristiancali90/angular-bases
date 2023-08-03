import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk'];
  public lastDeletedhero?: string;


  deleteHero(): void{
    this.lastDeletedhero = this.heroNames.pop();
  }


}
