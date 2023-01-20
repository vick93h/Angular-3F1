import {ElementRef, SimpleChanges} from '@angular/core';
import {persona} from './persona';

export class areaDati{
  selectValue:string='';
  sel:boolean=false;
  reference:ElementRef;
  arrayPersona:persona[];

  selectRead:boolean=false;
}
