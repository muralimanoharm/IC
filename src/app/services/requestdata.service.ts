import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Http, Response } from '@angular/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RequestdataService {

  cryptocompare:string = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,XRP,ETH,LTC,BCH,XMR,RPX,DBC,XLM,NEO,GAS,OMG,REQ,ZRX,GNT,BAT,AE,DASH,DOGE,SC,TRX,ETN,ONT,ZIL,EOS,POLY,DGB,NCASH,ADA,ICX,VEN,DGD,QLC,POWR,WPR,WAVES,WAN,XVG,BLZ,SUB,LRC,NEXO,EFX,REP,LOOM,QTUM,QKC,LSK,NPXS,USDT,ETC,KMD,LET,SOUL,PHX,VET,BCHABC,BCHSV,IXT,SKY,ODE,TST  &tsyms=";
  cryptocomparesingle:string = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=";
  cryptocompareHistoricalData:string = "https://min-api.cryptocompare.com/data/";
  constructor(private http:Http) { 

  }

  getTestURLResult(keyword:string){
    var url="";
    url ="http://api.ethplorer.io/getTokenInfo/" + keyword +"?apiKey=freekey";
    return this.http.get(url).pipe(map(res => res.text()));
  }

  getURLResult(keyword:string,currency:string,historicalData = false,type = 0,limit = 0){ 
    var url="" ;
    if(!historicalData)
      {
      if(keyword == "Cryptocompare")
      {
        url = this.cryptocompare+currency;
      }else{
        url = this.cryptocomparesingle+keyword+"&tsyms="+currency;
      }
    }else{
      if(type == HistoryType.Daily)
      {
        var cryptocompareHistoricalDatalocal = this.cryptocompareHistoricalData + "histoday?fsym=";
        if(limit == DataPeriod.Month){
          url = cryptocompareHistoricalDatalocal +keyword+"&tsym="+currency + "&limit=30";
        }else if(limit == DataPeriod.Quater){
          url = cryptocompareHistoricalDatalocal +keyword+"&tsym="+currency + "&limit=90";
        }else if(limit == DataPeriod.Half){
          url = cryptocompareHistoricalDatalocal +keyword+"&tsym="+currency + "&limit=180";
        }else if(limit == DataPeriod.year){
          url = cryptocompareHistoricalDatalocal +keyword+"&tsym="+currency + "&limit=365";
        }else if(limit == DataPeriod.full){
          url = cryptocompareHistoricalDatalocal +keyword+"&tsym="+currency + "&limit=2000";
        }
      }else if(type == HistoryType.Hourly){
        var cryptocompareHistoricalDatalocal  = this.cryptocompareHistoricalData + "histohour?fsym=";
        if(limit == DataPeriod.Day){
          url = cryptocompareHistoricalDatalocal +keyword+"&tsym="+currency + "&limit=24";
        }else if(limit == DataPeriod.Month){
          url = cryptocompareHistoricalDatalocal +keyword+"&tsym="+currency + "&limit=720";
        }
      }else if(type == HistoryType.Minute){
        var cryptocompareHistoricalDatalocal = this.cryptocompareHistoricalData + "histominute?fsym=";
        if(limit == DataPeriod.Hour){
          url = cryptocompareHistoricalDatalocal +keyword+"&tsym="+currency + "&limit=60";
        }else if(limit == DataPeriod.Day){
          url = cryptocompareHistoricalDatalocal +keyword+"&tsym="+currency + "&limit=1440";
        }else if(limit == DataPeriod.Half){
          url = cryptocompareHistoricalDatalocal +keyword+"&tsym="+currency + "&limit=180";
        }else if(limit == DataPeriod.year){
          url = cryptocompareHistoricalDatalocal +keyword+"&tsym="+currency + "&limit=365";
        }
      }
    }
    //console.log(url);
    return this.http.get(url).pipe(map(res => res.text()));
   }
}


export enum HistoryType{
  Daily = 1,
  Hourly,
  Minute
}

export enum DataPeriod{
  Hour = 1,
  Day,
  Month,
  Quater,
  Half,
  year,
  full
}