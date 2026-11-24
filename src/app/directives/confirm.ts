
import { Directive, input, output } from '@angular/core';

@Directive({
  selector: '[appConfirm]',
  host: {
    '(click)': 'confirmDelete()'
  }
})
export class Confirm {
  question = input('Are you sure?', { alias: 'appConfirm' });

  confirmed = output<void>();

  confirmDelete() {
    if (confirm(this.question())) {
      this.confirmed.emit();
    }
  }
}
