import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort,MatPaginator, MatTableDataSource,MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.scss']
})
export class PoolComponent implements OnInit {

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
    var data = require('src/app/mine/pools.json');
    ELEMENT_DATA = [];
    for(var key in data.Data){
      ELEMENT_DATA.push({
        Id: data.Data[key].Id,
        Url: data.Data[key].Url,
        LogoUrl:data.Data[key].LogoUrl,
        Name: data.Data[key].Name,
        Recommended: data.Data[key].Recommended,
        Sponsored: data.Data[key].Sponsored,
        MergedMining: data.Data[key].MergedMining,
        TxFeeSharedWithMiner: data.Data[key].TxFeeSharedWithMiner,
        AffiliateURL:data.Data[key].AffiliateURL,
        PoolFeatures:data.Data[key].PoolFeatures,
        Coins: data.Data[key].Coins,
        ServerLocations:data.Data[key].ServerLocations,
        PaymentType: data.Data[key].PaymentType,
        MergedMiningCoins:data.Data[key].MergedMiningCoins,
        Twitter: data.Data[key].Twitter,
        AverageFee: data.Data[key].AverageFee,
        FeeExpanded: data.Data[key].FeeExpanded,
        MinimumPayout: data.Data[key].MinimumPayout
      })
    }
    this.dataSource = new MatTableDataSource<PoolDetailsElement>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  GotoTheLink(link:string){
    window.location.href = link;
  }

}

export interface PoolDetailsElement{
  Id: string;
  Url: string;
  LogoUrl:string;
  Name: string;
  Recommended: boolean,
  Sponsored: boolean,
  MergedMining: boolean,
  TxFeeSharedWithMiner: boolean,
  AffiliateURL:string;
  PoolFeatures:string[];
  Coins: string[];
  ServerLocations:string[];
  PaymentType: string[];
  MergedMiningCoins:string[];
  Twitter: string;
  AverageFee: string;
  FeeExpanded: string;
  MinimumPayout: string;
}

var ELEMENT_DATA: PoolDetailsElement[] = [];



