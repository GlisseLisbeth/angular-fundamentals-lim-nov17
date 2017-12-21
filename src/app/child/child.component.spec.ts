import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChildComponent} from './child.component';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChildComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should recognize even numbers', () => {
    component.val = 2;
    component.ngOnChanges();
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    let h1 = compiled.querySelector('h1').textContent.trim();
    expect(h1).toEqual('par');
  });

  it('should recognize odd numbers', () => {
    component.val = 1;
    component.ngOnChanges();
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    let h1 = compiled.querySelector('h1').textContent.trim();
    expect(h1).toEqual('impar');
  });
});
