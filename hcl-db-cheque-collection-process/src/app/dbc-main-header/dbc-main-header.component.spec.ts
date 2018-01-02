import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbcMainHeaderComponent } from './dbc-main-header.component';

describe('DbcMainHeaderComponent', () => {
  let component: DbcMainHeaderComponent;
  let fixture: ComponentFixture<DbcMainHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbcMainHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbcMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
