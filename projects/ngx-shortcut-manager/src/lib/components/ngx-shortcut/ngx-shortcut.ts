import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-shortcut',
  standalone: true,
  imports: [
    UpperCasePipe
  ],
  templateUrl: './ngx-shortcut.html',
  styleUrl: './ngx-shortcut.sass',
})
export class NgxShortcut {
  @Input() keys: string[] = []
  @Input() separator: string = ''
  @Input() useSymbols: boolean = true

  private keySymbols: { [key: string]: string } = {
    'Shift': '⇧',
    'Control': '⌃',
    'Alt': '⌥',
    'Meta': '⌘',
    'ArrowUp': '↑',
    'ArrowDown': '↓',
    'ArrowLeft': '←',
    'ArrowRight': '→',
    'Enter': '⏎',
    'Backspace': '⌫',
    'Escape': '⎋',
    'Tab': '⇥',
    'CapsLock': '⇪',
    'Space': '␣'
  }
}
