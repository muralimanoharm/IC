import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort,MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-deadcoins',
  templateUrl: './deadcoins.component.html',
  styleUrls: ['./deadcoins.component.scss']
})
export class DeadcoinsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'CoinCode','Link','Category','star'];
  dataSource; 
  category:string;
  DeadCoinsLits;
  constructor() { }

  ngOnInit() {
    this.category = 'All';
    this.CreateDeadCoinList();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  getCategoryWise(category:string){
    console.log(category);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  CreateDeadCoinList(){
    var data = require('src/app/crypto/deadcoins/deadcoin.json');
    DeadCoinsList = [];
    for(var key in data.Data){
      DeadCoinsList.push({
        name:data.Data[key].name,
        CoinCode:data.Data[key].CoinCode,
        Summary:data.Data[key].Summary,
        Link:data.Data[key].Link,
        Category:data.Data[key]. Category
      });
    }
    this.dataSource = new MatTableDataSource<DeadCoins>(DeadCoinsList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  GotoTheLink(link:string){
    window.location.href = link;
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

var DeadCoinsList:DeadCoins[];

export interface DeadCoins{
  name:string; 
  CoinCode:string; 
  Summary:string;
  Link:string;
  Category:string
}