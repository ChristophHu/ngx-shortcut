import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxShortcutManager } from './ngx-shortcut-manager';

describe('NgxShortcutManager', () => {
  let component: NgxShortcutManager;
  let fixture: ComponentFixture<NgxShortcutManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxShortcutManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxShortcutManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
