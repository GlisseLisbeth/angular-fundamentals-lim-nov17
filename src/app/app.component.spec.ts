import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ChildComponent} from "./child/child.component";
import {ReactiveFormsModule} from "@angular/forms";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        AppComponent,
        ChildComponent
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy()
  });

  it('should increment counter', () => {
    component.increment();
    expect(component.counter).toEqual(2);
  });
  it('should not log values on invalid form', () => {
    spyOn(console, 'log');
    component.onSubmit();
    expect(console.log).toHaveBeenCalledTimes(0);
  });
  it('should log values on valid form', () => {
    spyOn(console, 'log');
    component.form.setValue({
      k1: '12345678'
    });
    component.onSubmit();

    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log).toHaveBeenCalledWith('valid', true);
    expect(console.log).toHaveBeenCalledWith('k1', '12345678');
  });
});
