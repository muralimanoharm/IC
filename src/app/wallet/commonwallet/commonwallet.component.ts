import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort,MatPaginator, MatTableDataSource,MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'app-commonwallet',
  templateUrl: './commonwallet.component.html',
  styleUrls: ['./commonwallet.component.scss']
})
export class CommonwalletComponent implements OnInit {

  displayedColumns: string[] = [ 'name'];
  dataSource;

  constructor() { 
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.CreateWalletDetails();
  }


  CreateWalletDetails(){
    var data = require('src/app/wallet/wallet.json');
    ELEMENT_DATA = [];
    for(var key in data.Data){
      ELEMENT_DATA.push({
        Url:data.Data[key].Url,
        Name:data.Data[key].Name,
        Security:data.Data[key].Security,
        Anonymity:data.Data[key].Anonymity,
        EaseOfUse:data.Data[key].EaseOfUse,
        HasAttchedCard:data.Data[key].HasAttchedCard,
        AttachedCard:data.Data[key].AttachedCard,
        HasTradingFacilities:data.Data[key].HasTradingFacilities,
        HasVouchersAndOffers: data.Data[key].HasVouchersAndOffers,
        WalletFeatures:data.Data[key].WalletFeatures,
        Coins:data.Data[key].Coins,
        Platforms:data.Data[key].Platforms,
        SourceCodeUrl:data.Data[key].SourceCodeUrl,
        ValidationType:data.Data[key].ValidationType,
        IsUsingOurApi:data.Data[key].IsUsingOurApi,
        AffiliateURL:data.Data[key].AffiliateURL,
        LogoUrl:data.Data[key].LogoUrl,
        Recommended:data.Data[key].Recommended,
        Sponsored:data.Data[key].Sponsored
      })
    }
    this.dataSource = new MatTableDataSource<walletDetailsElement>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  GotoTheLink(link:string){
    window.location.href = link;
  }

}

export interface walletDetailsElement{
  Url:string;
  Name:string;
  Security:string;
  Anonymity:string;
  EaseOfUse:string;
  HasAttchedCard:string;
  AttachedCard:string;
  HasTradingFacilities:boolean;
  HasVouchersAndOffers: boolean;
  WalletFeatures:string[];
  Coins:string[];
  Platforms:string[];
  SourceCodeUrl:string;
  ValidationType:string;
  IsUsingOurApi:boolean;
  AffiliateURL:string;
  LogoUrl:string;
  Recommended:boolean;
  Sponsored:boolean;
}

var ELEMENT_DATA: walletDetailsElement[] = [];


