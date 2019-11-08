import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSecaoPage } from './listar-secao.page';

describe('ListarSecaoPage', () => {
  let component: ListarSecaoPage;
  let fixture: ComponentFixture<ListarSecaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSecaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSecaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
