import { Directive, input, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseenter)': 'isHovered.set(true)',
    '(mouseleave)': 'isHovered.set(false)',
    '[style.background]': 'isHovered() ? (color() || "lightblue") : ""'
  }
})
export class Highlight {
  color = input('', { alias: 'appHighlight' });
  isHovered = signal(false);
}
