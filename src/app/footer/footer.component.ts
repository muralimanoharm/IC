import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  BTC='BTC  Address';
  ETH='ETH  Address';
  BCH='BCH  Address';
  XRP='XRP  Address';

  constructor(public snackBar: MatSnackBar) { 
  }

  ngOnInit() {
  }

  openSnackBar() {
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 1000,
    });
  }

  copyInputMessage(val: string){
    if(val == 'BTC')
    {
      val = this.BTC;
    }else if(val == 'ETH'){
      val = this.ETH;
    }else if(val == 'BCH'){
      val = this.BCH;
    }else if(val == 'XRP'){
      val = this.XRP; 
    }

    let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = val;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);

      this.openSnackBar();
    }


    GotoLink(crypto:string){
      window.location.href = crypto;
      console.log(crypto);
    }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: '<span class="example-pizza-party">🍕!!  Address Copied successfully !!🍕 </span>',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}

