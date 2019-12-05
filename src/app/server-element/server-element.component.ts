import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,OnChanges {
 @Input('srvrElement') element={}
  constructor() { }

  ngOnInit() {
    console.log("ngOnInit called");
  }
  ngOnChanges(changes:  SimpleChanges ){
    console.log("ngOnChanges called");
    console.log(changes);
  }
}
