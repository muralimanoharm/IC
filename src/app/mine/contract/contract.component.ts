import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort,MatPaginator, MatTableDataSource,MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {
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
    this.CreateContractDetails();
  }


  CreateContractDetails(){
    var data = require('src/app/mine/contracts.json');
    ELEMENT_DATA = [];
    for(var key in data.Data){
      ELEMENT_DATA.push({
        Id:data.Data.Id,
        ParentId: data.Data[key].ParentId,
        Company:data.Data[key].Company,
        Url:data.Data[key].Url,
        LogoUrl:data.Data[key].LogoUrl,
        Name:data.Data[key].Name,
        Recommended: data.Data[key].Recommended,
        Sponsored: data.Data[key].Sponsored,
        AffiliateURL:data.Data[key].AffiliateURL,
        Algorithm: data.Data[key].Algorithm,
        HashesPerSecond:data.Data[key].HashesPerSecond,
        Cost: data.Data[key].Cost,
        Currency: data.Data[key].Currency,
        FeeValue: data.Data[key].FeeValue,
        FeeValueCurrency: data.Data[key].FeeValueCurrency,
        ContractLength: data.Data[key].ContractLength,
        CurrenciesAvailable: data.Data[key].CurrenciesAvailable,
        CurrenciesAvailableLogo:data.Data[key].CurrenciesAvailableLogo,
        CurrenciesAvailableName:data.Data[key].CurrenciesAvailableName
      })
    }
    this.dataSource = new MatTableDataSource<ContractDetailsElement>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  GotoTheLink(link:string){
    window.location.href = link;
  }

}

export interface ContractDetailsElement{
  Id:number;
  ParentId: number;
  Company:string;
  Url:string;
  LogoUrl:string;
  Name:string;
  Recommended: boolean;
  Sponsored: boolean;
  AffiliateURL:string;
  Algorithm: string;
  HashesPerSecond:number;
  Cost: number;
  Currency: string;
  FeeValue: number;
  FeeValueCurrency: string;
  ContractLength: number;
  CurrenciesAvailable: string;
  CurrenciesAvailableLogo:string;
  CurrenciesAvailableName:string;
}

var ELEMENT_DATA: ContractDetailsElement[] = [];

