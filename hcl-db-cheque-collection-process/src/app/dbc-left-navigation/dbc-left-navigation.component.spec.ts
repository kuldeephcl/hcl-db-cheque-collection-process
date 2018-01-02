import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbcLeftNavigationComponent } from './dbc-left-navigation.component';

describe('DbcLeftNavigationComponent', () => {
  let component: DbcLeftNavigationComponent;
  let fixture: ComponentFixture<DbcLeftNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbcLeftNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbcLeftNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
