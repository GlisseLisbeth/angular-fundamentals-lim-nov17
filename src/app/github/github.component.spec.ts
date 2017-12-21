import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import {GithubComponent} from './github.component';
import "rxjs/add/observable/of";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {GithubService} from "../github-service.service";
import {Observable} from "rxjs/Observable";

// const httpClientStub = {
//   post: (url, body) => {
//     return Observable.of(36)
//   }
// };

let injector;
let service;
let httpMock;

const githubServiceStub = {
  getResult: () => Observable.of(18)
};

fdescribe('GithubComponent', () => {
  let component: GithubComponent;
  let fixture: ComponentFixture<GithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide: GithubService, useValue: githubServiceStub}],
      declarations: [GithubComponent]
    }).compileComponents();

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', async(() => {
    expect(component).toBeTruthy();
    expect(component.result).toEqual(9);
  }));
});
