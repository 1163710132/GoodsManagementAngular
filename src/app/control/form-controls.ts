import {FormControl} from '@angular/forms';
import {range} from 'rxjs';

export class FormControls {
  static arrayOf(amount: number): FormControl[] {
    const controls = [];
    range(0, amount).forEach(i => {
      controls.push(new FormControl(''));
    });
    return controls;
  }
}
