import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.scss']
})
export class TradingComponent implements OnInit {

  contentID:string;
  subContentID:string;
  constructor() {     
  this.contentID = '1'; 
  }

  ngOnInit() {
   
  }

  showContent(contentI){
    this.contentID = contentI;
  }

  showSubContent(contentI){
    this.subContentID = contentI;
  } 

  checkContentID(ID){

    if(this.contentID == ID)
    {
      return false;
    }
    return true;
  }

  checkSubContentID(ID){

    if(this.subContentID == ID)
    {
      return false;
    }
    return true;
  }

}
