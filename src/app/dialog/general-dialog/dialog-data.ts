import {Predicate} from '@angular/core';
import {FormControl} from '@angular/forms';

export interface DialogConstraint {
  [key: string]: Constraint;
}
export interface DialogData {
  [key: string]: any;
}
export interface DialogControls {
  [key: string]: FormControl;
}
export interface Constraint {
  predicate: Predicate<any>;
  type: 'number'|'string'|'time'|'url';
}
