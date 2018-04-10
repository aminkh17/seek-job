import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdJobComponent } from './upd-job.component';

describe('UpdJobComponent', () => {
  let component: UpdJobComponent;
  let fixture: ComponentFixture<UpdJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
