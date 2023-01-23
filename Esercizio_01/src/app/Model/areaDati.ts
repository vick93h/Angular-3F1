import {ElementRef, SimpleChanges} from '@angular/core';
import {persona} from './persona';

export class areaDati{
  sel:boolean=false;

  arrayPersona:persona[];
  id:number;
  selectRead:boolean=false;
  selectUpdate:boolean=false;
}
