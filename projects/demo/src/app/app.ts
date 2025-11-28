import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { NgxShortcut, NgxShortcutService } from '../../../ngx-shortcut-manager/src/public-api';

@Component({
  selector: 'app-root',
  imports: [
    NgxShortcut
  ],
  providers: [
    NgxShortcutService
  ],
  templateUrl: './app.html',
  styleUrl: './app.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App implements OnInit {
  private readonly shortcutService = inject(NgxShortcutService);
  
  ngOnInit(): void {
    this.shortcutService.addShortcut({ keys: ["Shift", "a", "b"], cb: () => { console.log("Shortcut Shift + A + B triggered!")} });
  }  
}
