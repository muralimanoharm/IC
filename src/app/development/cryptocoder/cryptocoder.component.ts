import { Component, OnInit } from '@angular/core';
import {ScrollToService, ScrollToEvent,ScrollToAnimationEasing,ScrollToOffsetMap  } from '@nicky-lenaers/ngx-scroll-to';


@Component({
  selector: 'app-cryptocoder',
  templateUrl: './cryptocoder.component.html',
  styleUrls: ['./cryptocoder.component.scss']
})
export class CryptocoderComponent implements OnInit {
  public ngxScrollToDestination: string;
  public ngxScrollToEvent: ScrollToEvent;
  public ngxScrollToDuration: number;
  public ngxScrollToEasing: ScrollToAnimationEasing;
  public ngxScrollToOffset: number;
  public ngxScrollToOffsetMap: ScrollToOffsetMap;
  public panelOpenState:boolean;
  eth = false;
  btc = false;
  dao = false;
  aion = false;
  cosmos = false;
  blockchain = false;
  ecosystem = false;
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

  SelectedTab(selection:string){
    this.eth = false;
    this.btc = false;
    this.dao = false;
    this.aion = false;
    this.cosmos = false;
    if(selection == 'eth'){
      this.eth = true;
    }else if(selection == 'btc'){
      this.btc = true;
    }else if(selection == 'dao'){
      this.dao = true;
    }else if(selection == 'aion'){
      this.aion = true;
    }else if(selection == 'cosmos'){
      this.cosmos = true;
    }
  }
}
