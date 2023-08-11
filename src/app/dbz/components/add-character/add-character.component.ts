import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {


 //se crea e inicializa la propiedad EventEmitter
 @Output()
 public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: 'marti lindo',
    power: 0
  };


  emitCharacter(): void{

    debugger;
    console.log(this.character);
    //se emite el objeto character
    this.onNewCharacter.emit(this.character);
    this.character = { name: '', power: 0};
  }

}
