import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbcMainFooterComponent } from './dbc-main-footer.component';

describe('DbcMainFooterComponent', () => {
  let component: DbcMainFooterComponent;
  let fixture: ComponentFixture<DbcMainFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbcMainFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbcMainFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
