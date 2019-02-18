import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { TradingComponent} from '../app/trading/trading.component';
import { CoinpriceComponent} from '../app/crypto/coinprice/coinprice.component';
import { TokensComponent} from '../app/development/tokens/tokens.component';
import { CoindetailsComponent} from '../app/crypto/coinprice/coindetails/coindetails.component'
import { CalendarComponent} from '../app/calendar/calendar.component'
import { WalletComponent} from './wallet/GetAWallet/wallet.component';
import { CommonwalletComponent} from './wallet/commonwallet/commonwallet.component';
import { NewsComponent} from '../app/news/news.component';
import { MineComponent} from '../app/mine/mine.component';
import { ExchangeComponent} from '../app/exchange/exchange.component';
import { TokenListComponent} from '../app/development/tokens/token-list/token-list.component';
import { DeadcoinsComponent} from '../app/crypto/deadcoins/deadcoins.component';
import {LegalityComponent} from '../app/crypto/legality/legality.component';
import { Page404Component} from './page404/page404.component';
import {CryptocardsComponent} from './wallet/cryptocards/cryptocards.component'
import {ContractComponent} from './mine/contract/contract.component';
import {EquipmentComponent} from './mine/equipment/equipment.component';
import {PoolComponent} from './mine/pool/pool.component';

const routes: Routes = [
  { path : '', pathMatch:'prefix', redirectTo:'CoinPrice' },
  { path : 'Crypto',  loadChildren: './basics/crypto.module#CryptoModule'},
  { path : 'Trading', component:TradingComponent},
  { path : 'CoinPrice', component:CoinpriceComponent  },
  { path : 'CoinDetails/:id/:currency',component : CoindetailsComponent},
  { path : 'blockchain', component : TokensComponent},
  { path : 'calendar',  component:CalendarComponent},
  { path : 'wallet', component:WalletComponent},
  { path : 'commonwallet', component:CommonwalletComponent},
  { path : 'cryptocards', component:CryptocardsComponent},
  { path : 'news',component : NewsComponent},
  { path : 'aboutUs',component:HomeComponent},
  { path : 'mine' , component:MineComponent},
  { path : 'contract' , component:ContractComponent},
  { path : 'equipment' , component:EquipmentComponent},
  { path : 'pool' , component:PoolComponent},
  { path : 'exchange',component:ExchangeComponent}, 
  { path : 'pageNotFound', component: Page404Component},
  { path : 'tokenList/:id', component:TokenListComponent},
  { path : 'Deadcoins' , component:DeadcoinsComponent},
  { path : 'legality', component:LegalityComponent},
  { path : 'cryptocoder' , loadChildren: './development/cryptocoder/cryptocoder.module#CryptoCoderModule'},
  { path : '**', redirectTo: '/pageNotFound'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
