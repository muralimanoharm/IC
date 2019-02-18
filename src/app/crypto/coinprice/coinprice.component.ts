import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort,MatPaginator, MatTableDataSource} from '@angular/material';
import {RequestdataService} from '../../services/requestdata.service';
import { resolveTimingValue } from '@angular/animations/browser/src/util';
import {AppComponent,AppData} from '../../app.component';


@Component({
  selector: 'app-coinprice',
  templateUrl: './coinprice.component.html',
  styleUrls: ['./coinprice.component.scss']
})

export class CoinpriceComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'MarketCap', 'Price','totalsupply','Volume','Change','star'];
  dataSource; 
  response: string;
  currency:string = "";
  currencySymbol:string = "";
  showContent:Boolean = true;  

  constructor(private requestdataService:RequestdataService,private appData:AppData) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toggleShowContent(){
    this.showContent = !this.showContent;
    console.log( this.showContent);
  }

  ngOnInit() {
    this.getCryptoPrice("USD");
  } 

  getCryptoPrice(currency:string){
    const requested = this.requestdataService.getURLResult("Cryptocompare",currency);
    requested.subscribe(val => {
      let result = JSON.parse(val);
      this.response = result;
      ELEMENT_DATA = [];

      // BTC,XRP,ETH,LTC,BCH,XMR,RPX,DBC,XLM,NEO,GAS,OMG,REQ,ZRX,GNT,BAT,AE  
      
      this.currency = result.RAW.BTC[currency].TOSYMBOL;
      this.currencySymbol = result.DISPLAY.BTC[currency].TOSYMBOL;

    for(var key in result.RAW){
        ELEMENT_DATA.push(
          {name:  result.RAW[key][currency].FROMSYMBOL,fullName:this.GetCoinName(result.RAW[key][currency].FROMSYMBOL),volume:result.RAW[key][currency].TOTALVOLUME24HTO, MarketCap: result.RAW[key][currency].MKTCAP,totalsupply : result.RAW[key][currency].SUPPLY, Price:result.RAW[key][currency].PRICE,Change: result.RAW[key][currency].CHANGEPCT24HOUR},
        );
      }
      this.dataSource = new MatTableDataSource<CoinPriceElement>(ELEMENT_DATA);
        
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },error => {
      alert("ERROR");
    });
  }
  
  GetCoinName(coin:string ) : string{
    return this.appData.GetCoinName(coin);
  }

  DisplayPageDetails(index:number) : number{
    if(this.paginator.pageSize < 0)
    {
      return (index + 1 );
    }
    else{
      return ((index + 1 ) + ((this.paginator.pageIndex)*(this.paginator.pageSize)));
    }
   
  }
} 
 

export interface CoinPriceElement {
  name: string[];
  fullName:string;
  MarketCap: number;
  totalsupply : number;
  volume:number;
  Price : number;
  Change: number;
}

var ELEMENT_DATA: CoinPriceElement[] = [];