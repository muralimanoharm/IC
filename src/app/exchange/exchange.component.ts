import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort,MatPaginator, MatTableDataSource,MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  displayedColumns: string[] = [ 'name'];
  dataSource;
  countryList:string[] = [];

  constructor() { }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  m_WHOLE_ELEMENT_DATA:exchangeDetailsElement[] = [];

  ngOnInit() {

    var data = require('src/app/exchange/exchange.json');
    ELEMENT_DATA = [];
    for(var key in data.Data){
      this.m_WHOLE_ELEMENT_DATA.push({
        AffiliateUrl:data.Data[key].AffiliateUrl,
        Country:data.Data[key].Country,
        InternalName:data.Data[key].InternalName,
        ItemType:data.Data[key].ItemType,
        LogoUrl:data.Data[key].LogoUrl,
        Name:data.Data[key].Name,
        OrderBook:data.Data[key].OrderBook,
        Recommended:data.Data[key].Recommended,
        Sponsored:data.Data[key].Sponsored,
        Trades:data.Data[key].Trades,
        rating:3,
        Description:data.Data[key].Description,
        startDate:"",
      });
    }
    this.CreateExchangedata("India");
    this.dataSource.filterPredicate = (data: exchangeDetailsElement, filter: string) => data.Name.trim().toLowerCase().indexOf(filter) !== -1;
  }

    CheckIsCoinAvailable(coin:string):boolean{
    return true;
  }

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

  tabChanged(event:MatTabChangeEvent){
    if(event.index == 0)
    {
      this.CreateExchangedata('India')
    }else{
      this.CreateExchangedata('');
    }
  }

  CreateExchangedata(country:string){

    ELEMENT_DATA=[];
    if(country != ""){
       /*Only Indian Exchanges*/
       for(var i = 0; i < this.m_WHOLE_ELEMENT_DATA.length; i++){
        this.countryList.push(this.m_WHOLE_ELEMENT_DATA[i].Country);
         if(this.m_WHOLE_ELEMENT_DATA[i].Country == country){
          ELEMENT_DATA.push(this.m_WHOLE_ELEMENT_DATA[i]);
         }
      }
      this.dataSource = new MatTableDataSource<exchangeDetailsElement>(ELEMENT_DATA);
    }else {
      /*All countries Except India*/
      for(var i = 0; i < this.m_WHOLE_ELEMENT_DATA.length; i++){
        this.countryList.push(this.m_WHOLE_ELEMENT_DATA[i].Country);
        if(this.m_WHOLE_ELEMENT_DATA[i].Country != "India"){
         ELEMENT_DATA.push(this.m_WHOLE_ELEMENT_DATA[i]);
        }
     }
     this.dataSource = new MatTableDataSource<exchangeDetailsElement>(ELEMENT_DATA);
     this.dataSource.paginator = this.paginator;
    }
    
    this.dataSource.sort = this.sort;
  }

  GotoTheLink(link:string){
    window.location.href = link;
  }
}


export interface exchangeDetailsElement {
  AffiliateUrl:string;
  Country:string;
  InternalName:string;
  ItemType:string;
  LogoUrl:string;
  Name:string;
  OrderBook:boolean;
  Recommended:boolean;
  Sponsored:boolean;
  Trades:boolean;
  rating:number;
  Description:string;
  startDate:string;
}

var ELEMENT_DATA: exchangeDetailsElement[] = [];
var WHOLE_ELEMENT_DATA:exchangeDetailsElement[] = [];
