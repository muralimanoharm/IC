import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.scss']
})
export class TokenListComponent implements OnInit {
  cryptoName:string;
  tokenElementData:tokenDetails[];
  searchText:string;
  constructor(private _Activatedroute:ActivatedRoute) { 
  this.cryptoName =this._Activatedroute.snapshot.params['id'];  
  }

  ngOnInit() {
    this.InitializePage();
  }

    InitializePage(){
    /*Get the Coin details from te map*/
    var data = require('src/app/development/tokens/token-list/tokenlist.json');
    this.tokenElementData = [];
    for(var key in data.Data){  
      this.tokenElementData.push(
        {
          name: data.Data[key].name,
          description: data.Data[key].description,
          companyName: data.Data[key].companyName,
          symbol: data.Data[key].symbol,
          source:data.Data[key].source,
          rating:data.Data[key].rating,
          country:data.Data[key].country,
          webLink:data.Data[key].webLink,
          telegramLink:data.Data[key].telegramLink,
          githubLink:data.Data[key].githubLink,
          redditlink:data.Data[key].redditlink,
          discordlink:data.Data[key].discordlink,
          bitcointalklink:data.Data[key].bitcointalklink,
          whitepaperlink:data.Data[key].whitepaperlink,
          twitter:data.Data[key].twitter,
          medium:data.Data[key].medium,
          linkedId:data.Data[key].linkedId
        }
      );
    }


  }
  IslinkAvailable(link:string):boolean{
    if(link=="")
    {
      return false;
    }
    return true;
  }
}
export class Options {
  name: '';
  description: '';
  companyName: '';
  symbol: '';
  source:'';
  webLink:'';
  telegramLink:'';
  githubLink:'';
  redditlink:'';
  discordlink:'';
  bitcointalklink:'';
  whitepaperlink:'';
  twitter:'';
  medium:'';
  linkedId:'';
}

export class InputFilter {
  constructor(private options = new Options(),
              private element: {}) {

  }
}

export interface tokenDetails {
  name: string;
  description: string;
  companyName: string;
  symbol: string;
  source:string;
  rating:number;
  country?:string;
  webLink?:string;
  telegramLink?:string;
  githubLink?:string;
  redditlink?:string;
  discordlink?:string;
  bitcointalklink?:string;
  whitepaperlink?:string;
  twitter:string;
  medium:string;
  linkedId:string;
}

export enum LinkType{
  networkLink = 1,
  webLink,
  telegramLink,
  githubLink,
  redditlink,
  discordlink,
  bitcointalklink,
  whitepaperlink,
  twitter,
  medium,
  linkedId
}