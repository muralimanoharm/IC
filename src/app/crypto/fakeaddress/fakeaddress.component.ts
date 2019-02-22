import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort,MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-fakeaddress',
  templateUrl: './fakeaddress.component.html',
  styleUrls: ['./fakeaddress.component.scss']
})
export class FakeaddressComponent implements OnInit {

  displayedColumns: string[] = ['position', 'address','comment','date','star'];
  dataSource; 
  fakeaddress:fakeAddress[];
  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit() {
    this.InitializePage();
  }
  InitializePage(){
    this.fakeaddress = [] ;
    var data = require('src/app/crypto/fakeaddress/fakeaddress.json');
    for(var k in data)
    {
      this.fakeaddress.push(data[k]);
    }
    this.dataSource = new MatTableDataSource<fakeAddress>(this.fakeaddress);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

  GotoTheLink(link:string){
    window.location.href = link;
  }

}

interface fakeAddress{
  address:string;
  comment:string;
  date:string
}