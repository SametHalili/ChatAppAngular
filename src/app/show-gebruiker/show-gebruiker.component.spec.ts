import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGebruikerComponent } from './show-gebruiker.component';

describe('ShowGebruikerComponent', () => {
  let component: ShowGebruikerComponent;
  let fixture: ComponentFixture<ShowGebruikerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowGebruikerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGebruikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
