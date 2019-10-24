import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInPutComponent } from './admin-in-put.component';

describe('AdminInPutComponent', () => {
  let component: AdminInPutComponent;
  let fixture: ComponentFixture<AdminInPutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInPutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
