import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { NgxShortcutManager } from '../../../ngx-shortcut-manager/src/public-api';

@Component({
  selector: 'app-root',
  imports: [],
  providers: [
    NgxShortcutManager
  ],
  templateUrl: './app.html',
  styleUrl: './app.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App implements OnInit {
  private readonly shortcutManager = inject(NgxShortcutManager);
  
  ngOnInit(): void {
    this.shortcutManager.addShortcut({ keys: ["Shift", "a", "b"], cb: () => { console.log("Shortcut Shift + A + B triggered!")} });
  }
  
}
