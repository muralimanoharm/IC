import { Component,OnInit } from '@angular/core';
import {ScrollToService, ScrollToEvent,ScrollToAnimationEasing,ScrollToOffsetMap  } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {
  
  public ngxScrollToDestination: string;
  public ngxScrollToEvent: ScrollToEvent;
  public ngxScrollToDuration: number;
  public ngxScrollToEasing: ScrollToAnimationEasing;
  public ngxScrollToOffset: number;
  public ngxScrollToOffsetMap: ScrollToOffsetMap;
  public panelOpenState:boolean;
  contentID:string;
  constructor(private scrollService: ScrollToService) {    
    this.ngxScrollToDestination = 'destination-1';
    this.ngxScrollToEvent = 'mouseenter';
    this.ngxScrollToDuration = 1500;
    this.ngxScrollToEasing = 'easeOutElastic';
    this.ngxScrollToOffset = 300;
    this.ngxScrollToOffsetMap = new Map();
    this.ngxScrollToOffsetMap
      .set(480, 100)
      .set(768, 200)
      .set(1240, 300)
      .set(1920, 400)
  }

  ngOnInit() {
  }
}
