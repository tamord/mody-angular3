import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { SerService } from './ser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges,OnInit, OnDestroy {
  title = 'mody-angular3';
  
  constructor(private ser:SerService) {
        this.ser.st= "abc";
  }
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  
    
}
