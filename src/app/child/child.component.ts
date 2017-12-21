import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input()
  val: number = 0;

  text = '';

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.text = this.val % 2 === 0 ? 'par' : 'impar';
  }

}
