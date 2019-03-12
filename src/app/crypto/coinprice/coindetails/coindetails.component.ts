import { ActivatedRoute } from '@angular/router';
import { Component, OnInit ,ViewChild} from '@angular/core';
import {coinDetails,AppData} from '../../../app.component';
import {RequestdataService, HistoryType, DataPeriod} from '../../../services/requestdata.service';
import {TickerapiService} from '../../../services/tickerapi/tickerapi.service';
import {MatSort, MatTableDataSource} from '@angular/material';

import * as Highcharts from 'highcharts/highstock';

@Component({
  selector: 'app-coindetails',
  templateUrl: './coindetails.component.html',
  styleUrls: ['./coindetails.component.scss']
})
export class CoindetailsComponent implements OnInit {
  cryptoName:string;
  cryptoSymbol:string;
  coinPrice:string;
  circulatingSupply:string;
  marketCap:string;
  public change:number;
  volume:string;
  coindetails:coinDetails;
  response: string;
  currency:string;
  currencySymbol:string = "";
  timeFrom:number;
  timeTo:number;

  /**Market */
  market:string[];
  /**Strength*/
  buyRating:number;
  teamStrength:number;
  productStrength:number;
  coinStrength:number;
  githubActivity:number;
  brandAwarness:number;
  openChannels:number;
  /*purpose*/
  cryptoClarity:number;
  categories:string[];
  purpose:string;
  diffrentiation:string;
  icIdea:number;
  youtubeLink:string;
  /*news*/
  twitterLink:string;
  facebookLink:string;

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['position', 'exchange', 'time', 'buyrate','sellrate','24hrrates','fees','buyratepfees','sellratespfees'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  
  /**************************** */
  Highcharts = Highcharts; // required
  chartConstructor = 'stockChart'; // optional string, defaults to 'chart'
  chartOptions = { }; // required
  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false

  /************************************** */

  constructor( private _Activatedroute:ActivatedRoute,private appData:AppData, private requestdataService:RequestdataService,private tickerapiService:TickerapiService) { 
   this.cryptoName =this._Activatedroute.snapshot.params['id'];
   this.cryptoSymbol = this.cryptoName;
   this.currency = this._Activatedroute.snapshot.params['currency'];
  }
  ngOnInit() {
    this.coindetails = this.appData.GetCoinDetails(this.cryptoName);
    this.getCryptoPrice(this.currency);
    this.GetCoinAnalysisDetails(); 
    this.GetCryptoPriceInIndianMarket();
    this.dataSource.sort = this.sort;
  }

  tabClick(tab:number) {
    //console.log(tab);
  }

  getCryptoPrice(currency:string){
    const requested = this.requestdataService.getURLResult(this.cryptoName,currency);
    requested.subscribe(val => {
      let result = JSON.parse(val);
      this.response = result;
      this.currency = currency;

    for(var key in result.RAW){
      this.cryptoName = this.GetCoinName(this.cryptoSymbol);
      this.coinPrice = result.RAW[key][currency].PRICE;
      this.circulatingSupply = result.RAW[key][currency].SUPPLY;
      this.marketCap = result.RAW[key][currency].MKTCAP;
      this.change = result.RAW[key][currency].CHANGEPCT24HOUR;
      this.volume = result.RAW[key][currency].TOTALVOLUME24HTO;
      this.currencySymbol = result.DISPLAY[key][currency].TOSYMBOL;
      }
      this.GetCryptoHistoricalData(this.currency,HistoryType.Daily,DataPeriod.full);
    },error => {
      alert("ERROR");
    });
  }
  GetCryptoPriceInIndianMarket(){
    this.tickerapiService.GetCryptoPriceInIndianMarket(this.cryptoSymbol,this.market);
  }

  GetCryptoHistoricalData(currency:string,type:number,limit:number){
    const requested = this.requestdataService.getURLResult(this.cryptoSymbol,currency,true,type,limit);
    requested.subscribe(val => {
      let result = JSON.parse(val);
      this.timeFrom = result.TimeFrom;
      this.timeTo = result.TimeTo;
      let _lineChartData:Array<any> = new Array(3);
      _lineChartData[0] = {data: new Array(30), label: 'Low'};
      _lineChartData[1] = {data: new Array(30), label: 'High'};
      _lineChartData[2] = {data: new Array(30), label: 'Price ('+currency+')'};
      let j = 0;;
      for(var key in result.Data)
      {
        _lineChartData[0].data[j] = result.Data[key].low;
        j++;
      }
      j=0;
      for(var key in result.Data)
      {
        _lineChartData[1].data[j] = result.Data[key].high;
        j++;
      }
      j=0;
      for(var key in result.Data)
      {
        if(result.Data[key].close > 0)
        {
          _lineChartData[2].data[j] = result.Data[key].close;
          j++;
        }else{
          this.timeFrom = result.Data[key].time;
        }
      }
      j=0;
      this.chartOptions = { title: { text: this.cryptoName },
      subtitle: { text: 'Price Chart' },
      legend: {
        enabled: true
      },
      plotOptions: {
        series: {
           pointStart: this.timeFrom*1000, //Epoch is 1000 times small that milliseconds
           pointInterval: 86400000 // 1 day
        }
      },series: [{
        name:_lineChartData[2].label,
        data: _lineChartData[2].data
      }] }; 

    },error => {
      alert("ERROR");
    });
  }

  GetCoinName(coin:string ) : string{
    return this.appData.GetCoinName(coin);
  }

  IsMinable():boolean{
    if(this.coindetails.isMinable){
      return true;
    }
    return false;
  }

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

  DecideLinkType(selectedLink:number){
    switch(selectedLink)
    {
        case LinkType.bitcointalklink:
            this.GotoLink(this.coindetails.bitcointalklink);
            break;
        case LinkType.discordlink:
            this.GotoLink(this.coindetails.discordlink);
            break;
        case LinkType.explorerlink:
            this.GotoLink(this.coindetails.explorerlink);
            break;
        case LinkType.githubLink:
            this.GotoLink(this.coindetails.githubLink);
            break;
        case LinkType.networkLink:
            this.GotoLink(this.coindetails.networkLink);
            break;
        case LinkType.redditlink:
            this.GotoLink(this.coindetails.redditlink);
            break;
        case LinkType.telegramLink:
            this.GotoLink(this.coindetails.telegramLink);
            break;
        case LinkType.webLink:
            this.GotoLink(this.coindetails.webLink);
            break;
        case LinkType.whitepaperlink:
            this.GotoLink(this.coindetails.whitepaperlink);
            break;
    }
  }

  GetCoinAnalysisDetails(){
  var data = require('src/app/crypto/coinprice/coindetails/cryptoAnalysis.json');
    for(var key in data.Data){
      if(data.Data[key].cryptoSymbol ==  this.cryptoSymbol)
      {
        this.cryptoSymbol=data.Data[key].cryptoSymbol;
        /**Market */
        this.market=data.Data[key].market;
        /**Strength*/
        this.buyRating=data.Data[key].buyRating;
        this.teamStrength=data.Data[key].teamStrength;
        this.productStrength=data.Data[key].productStrength;
        this.coinStrength=data.Data[key].coinStrength;
        this.githubActivity=data.Data[key].githubActivity;
        this.brandAwarness=data.Data[key].brandAwarness;
        this.openChannels=data.Data[key].openChannels;
        /*purpose*/
        this.cryptoClarity=data.Data[key].cryptoClarity;
        this.categories=data.Data[key].categories;
        this.purpose=data.Data[key].purpose;
        this.diffrentiation=data.Data[key].diffrentiation;
        this.icIdea=data.Data[key].icIdea;
        this.youtubeLink=data.Data[key].youtubeLink;
        /*news*/
        this.twitterLink=data.Data[key].twitterLink;
        this.facebookLink=data.Data[key].facebookLink;
      }
    }
  }

  GotoLink(link:string){
    window.location.href = link;
  }
}


export enum LinkType{
  networkLink = 1,
  explorerlink, 
  webLink,
  telegramLink,
  githubLink,
  redditlink,
  discordlink,
  bitcointalklink,
  whitepaperlink
}

const ELEMENT_DATA:string[] =[];