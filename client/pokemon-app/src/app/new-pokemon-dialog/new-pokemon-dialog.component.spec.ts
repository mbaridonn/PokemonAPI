import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPokemonDialogComponent } from './new-pokemon-dialog.component';

describe('NewPokemonDialogComponent', () => {
  let component: NewPokemonDialogComponent;
  let fixture: ComponentFixture<NewPokemonDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPokemonDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPokemonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
