import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickandmortyComponent } from './rickandmorty.component';

describe('RickandmortyComponent', () => {
  let component: RickandmortyComponent;
  let fixture: ComponentFixture<RickandmortyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RickandmortyComponent]
    });
    fixture = TestBed.createComponent(RickandmortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
