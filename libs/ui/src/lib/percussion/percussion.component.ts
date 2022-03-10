import { Component, OnInit, Input } from '@angular/core';
import { Drum } from '@tec/data';

@Component({
  selector: 'tec-percussion',
  templateUrl: './percussion.component.html',
  styleUrls: ['./percussion.component.css']
})
export class PercussionComponent implements OnInit {
  @Input() drums: Drum[] = [];

  
  constructor() { 
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }


}
