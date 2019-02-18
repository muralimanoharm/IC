import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  count: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {  name: 'Etherium', count: 1125, symbol: 'ETH'},
  {  name: 'Blockchain', count: 81, symbol: ''},
  {  name: 'Waves', count: 21, symbol: 'WAVES'},
  {  name: 'Stellar', count: 20, symbol: 'XLM'},
  {  name: 'EOS', count: 13, symbol: ''},
  {  name: 'Bitcoin', count: 13, symbol: 'BTC'},
  {  name: 'NEO', count: 76, symbol: 'NEO'},
  {  name: 'NEM', count: 6, symbol: 'XEM'},
  {  name: 'Graphene', count: 5, symbol: ''},
  {  name: 'Komodo', count: 5, symbol: 'KMD'},
  {  name: 'Qtum', count: 4, symbol: ''},
  {  name: 'Lisk', count: 4, symbol: 'LSK'},
  {  name: 'Bitshares', count: 4, symbol: ''},
  {  name: 'Ethereum Classic', count: 3, symbol: 'ETC'},
  {  name: 'Omni', count: 3, symbol: ''},
  {  name: 'ICON', count: 3, symbol: ''},
  {  name: 'Cardano', count: 3, symbol: 'ADA'},
  {  name: 'Ardor Blockchain', count: 2, symbol: ''},
  {  name: 'Stratis', count: 2, symbol: 'STRAT'},
  {  name: 'Nxt', count: 2, symbol: ''},
  {  name: 'Hyperledger', count: 2, symbol: ''},
  {  name: 'Counterparty', count: 2, symbol: 'XCP'},
  {  name: 'Wanchain', count: 2, symbol: 'WAN'},
  {  name: 'Rootstock', count: 2, symbol: ''},
  {  name: 'Dash', count: 2, symbol: ''},
  {  name: 'Sia', count: 2, symbol: 'SC'},
  {  name: 'Steem', count: 2, symbol: 'STEEM'},
];

/**
 * @title Table with sorting
 */



@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.scss']
})


export class TokensComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'count', 'list','network','explorer'];
  dataSource; 

  @ViewChild(MatSort) sort: MatSort;
  linkMap:Map<string,string>;
  keyMap:Map<string,any>;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.sort = this.sort;
  }

  GenerateAndGoToNetworkLink(){
    this.GotoLink("https://www.google.com/?gws_rd=ssl");
  }

  GenerateAndGoToExplorerLink(elementName:string){
    var url="";
    console.log(elementName);
    this.GotoLink(url);
  }

  GotoLink(crypto:string){
    window.location.href = crypto;
    console.log(crypto);
  }
}
