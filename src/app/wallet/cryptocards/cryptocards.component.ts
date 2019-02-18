import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort,MatPaginator, MatTableDataSource,MatTabChangeEvent} from '@angular/material';


@Component({
  selector: 'app-cryptocards',
  templateUrl: './cryptocards.component.html',
  styleUrls: ['./cryptocards.component.scss']
})
export class CryptocardsComponent implements OnInit {
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
    this.CreateCryptoCardsDetails();
  }


  CreateCryptoCardsDetails(){
    var data = require('src/app/wallet/cryptocards.json');
    ELEMENT_DATA = [];
    for(var key in data.Data){
      ELEMENT_DATA.push({
        Name:data.Data[key].Name,
        Url:data.Data[key].Url,
        AffiliateURL:data.Data[key].AffiliateURL,
        Recommended:data.Data[key].Recommended,
        Sponsored:data.Data[key].Sponsored,
        RelatedTo:data.Data[key].RelatedTo.Name,
        IsRelatedToAnotherItem:data.Data[key].IsRelatedToAnotherItem,
        CardType:data.Data[key].CardType,
        CardStatus:data.Data[key].CardStatus,
        Anonymity:data.Data[key].Anonymity,
        InstantTopUp:data.Data[key].InstantTopUp,
        CardCurrency:data.Data[key].CardCurrency,
        LifetimeLoad:data.Data[key].LifetimeLoad,
        LifetimeAtmWhitdrawal:data.Data[key].LifetimeAtmWhitdrawal,
        MaxSingleLoad:data.Data[key].MaxSingleLoad,
        SetupCost:data.Data[key].Fees.SetupCost,
        LoadFee:data.Data[key].Fees.LoadFee,
        LoadFeePercentage:data.Data[key].Fees.LoadFeePercentage,
        ATMDomesticFee:data.Data[key].Fees.ATMDomesticFee,
        ATMDomesticPctFee:data.Data[key].Fees.ATMDomesticPctFee,
        ATMInternationalFee:data.Data[key].Fees.ATMInternationalFee,
        ATMInternationalPctFee:data.Data[key].Fees.ATMInternationalPctFee,
        POSFee:data.Data[key].Fees.POSFee,
        CurrencyConversionPctFee:data.Data[key].Fees.CurrencyConversionPctFee,
        MonthlyFee:data.Data[key].Fees.MonthlyFee
      })
    }
    this.dataSource = new MatTableDataSource<CryptoCardDetailsElement>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  GotoTheLink(link:string){
    window.location.href = link;
  }

}

export interface CryptoCardDetailsElement{
  Name:string;
  Url:string;
  AffiliateURL:string;
  Recommended:boolean;
  Sponsored:boolean;
  RelatedTo:string;
  IsRelatedToAnotherItem:boolean;
  CardType:string;
  CardStatus:string;
  Anonymity:string;
  InstantTopUp:boolean;
  CardCurrency:string;
  LifetimeLoad:string;
  LifetimeAtmWhitdrawal:string;
  MaxSingleLoad:string;
  SetupCost:number;
  LoadFee:number;
  LoadFeePercentage:number;
  ATMDomesticFee:number;
  ATMDomesticPctFee:number;
  ATMInternationalFee:number;
  ATMInternationalPctFee:number;
  POSFee:number;
  CurrencyConversionPctFee:number;
  MonthlyFee:number;
}

var ELEMENT_DATA: CryptoCardDetailsElement[] = [];





