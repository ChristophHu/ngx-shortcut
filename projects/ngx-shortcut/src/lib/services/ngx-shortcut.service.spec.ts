import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { NgxShortcutService } from './ngx-shortcut.service';
import { Shortcut } from '../models/shortcut.type';

describe('NgxShortcutService (zoneless)', () => {
  let service: NgxShortcutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(NgxShortcutService);
    service.clearShortcuts();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a single shortcut', () => {
    const shortcut: Shortcut = { keys: ['Shift', 'A'], cb: jasmine.createSpy('cb') };
    service.addShortcut(shortcut);
    expect(service.shortcuts.length).toBe(1);
    expect(service.shortcuts[0]).toEqual(shortcut);
  });

  it('should add multiple shortcuts', () => {
    const shortcuts: Shortcut[] = [
      { keys: ['Shift', 'A'], cb: jasmine.createSpy('cb1') },
      { keys: ['Control', 'B'], cb: jasmine.createSpy('cb2') }
    ];
    service.addShortcut(shortcuts);
    expect(service.shortcuts.length).toBe(2);
    expect(service.shortcuts).toEqual(shortcuts);
  });

  it('should remove a shortcut', () => {
    const shortcut: Shortcut = { keys: ['Shift', 'A'], cb: jasmine.createSpy('cb') };
    service.addShortcut(shortcut);
    service.removeShortcut(shortcut);
    expect(service.shortcuts.length).toBe(0);
  });

  it('should clear all shortcuts', () => {
    const shortcuts: Shortcut[] = [
      { keys: ['Shift', 'A'], cb: jasmine.createSpy('cb1') },
      { keys: ['Control', 'B'], cb: jasmine.createSpy('cb2') }
    ];
    service.addShortcut(shortcuts);
    service.clearShortcuts();
    expect(service.shortcuts.length).toBe(0);
  });

  it('should trigger callback when shortcut keys are pressed', (done) => {
    const cb = jasmine.createSpy('cb');
    const shortcut: Shortcut = { keys: ['Shift', 'A'], cb };
    service.addShortcut(shortcut);

    // Simulate keydown events
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Shift' }));
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'A' }));

    // Simulate keyup events to reset state
    document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Shift' }));
    document.dispatchEvent(new KeyboardEvent('keyup', { key: 'A' }));

    setTimeout(() => {
      expect(cb).toHaveBeenCalled();
      done();
    }, 10);
  });
});