import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TickerapiService {

  /**Ticker Api for vrious exchanges */



  /** */

  constructor() { } 
  GetCryptoPriceInIndianMarket(cryptoSymbol:string ,market:string[]){
    console.log(cryptoSymbol);
    console.log(market);
  }
}
