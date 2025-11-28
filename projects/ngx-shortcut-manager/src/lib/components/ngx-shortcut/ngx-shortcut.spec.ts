import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxShortcut } from './ngx-shortcut';

describe('NgxShortcut', () => {
  let component: NgxShortcut;
  let fixture: ComponentFixture<NgxShortcut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxShortcut]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxShortcut);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
