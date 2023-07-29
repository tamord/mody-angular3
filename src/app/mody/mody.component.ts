import { Component } from '@angular/core';
import { mymody } from './mymody';

@Component({
  selector: 'mody',
  templateUrl: './mody.component.html',
  styleUrls: ['./mody.component.scss']
})
export class ModyComponent {

  m:mymody = new mymody();

  constructor()
  {

  }
    
  myClick()
  {                  

    debugger  

    this.m.a=5;
    this.m.b=10;
    this.m.c=15;
    this.m.d = "Mody Tal;"

    let n = this.m;
    
    debugger
    alert(this.m.d);
    alert('hello world');
  }
}
