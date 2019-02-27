import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {

  cryptoName:string;
  blockChainTutorials:BlockChainTutorialDetails[];
  constructor(private router:Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    }; 
    this.InitializePage();
  }

  ngOnInit() {
  }

  InitializePage(){
    var data = require('src/app/development/cryptocoder/blockchaindev/blockchains.json');
    this.blockChainTutorials=[];
    for(var key in data.Data){
      {
        this.blockChainTutorials.push(
            {
              name:data.Data[key].name,
              author:data.Data[key].author,
              authorMailID:data.Data[key].authorMailID,
              description:data.Data[key].description,
              creationDate:data.Data[key].creationDate,
              categories:data.Data[key].categories,
              level:data.Data[key].level,
              type:data.Data[key].type
            }
        );
      }
    }
  }
  GetFirstLetter(name:string):string{
    return name.charAt(0).toUpperCase();
  }

  getRandomColor(index:number) {

      var colnum = (index/10)*0.165;
      var color = Math.floor(0x1000000 *  colnum).toString(16);
      return '#' + ('000000' + color).slice(-6);
  }
}

 interface BlockChainTutorialDetails{
   name:string;
   author:string;
   authorMailID:string;
   description:string;
   creationDate:string;
   categories:string[];
   level:number;
   type:string
 }

