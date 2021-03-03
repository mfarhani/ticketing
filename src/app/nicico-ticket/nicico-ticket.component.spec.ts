import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicicoTicketComponent } from './nicico-ticket.component';

describe('NicicoTicketComponent', () => {
  let component: NicicoTicketComponent;
  let fixture: ComponentFixture<NicicoTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NicicoTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NicicoTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
