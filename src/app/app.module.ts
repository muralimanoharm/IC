import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent,AppData } from './app.component';
import { NestedMenuComponent } from './nested-menu/nested-menu.component';
import { MatMenuModule} from '@angular/material/menu';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'hammerjs';
import 'web-animations-js';

import {DemoMaterialModule} from './material.module';

import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';

import { TradingComponent } from './trading/trading.component';
import { FooterComponent,PizzaPartyComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component'; 
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CoinpriceComponent } from './crypto/coinprice/coinprice.component';
import { RequestdataService} from './services/requestdata.service';
import { TransformPipe } from './pipes/transform.pipe';
import { TokensComponent } from './development/tokens/tokens.component';
import { CoindetailsComponent } from './crypto/coinprice/coindetails/coindetails.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { AirdropsComponent } from './calendar/airdrops/airdrops.component';
import { BlockchainsComponent } from './calendar/blockchains/blockchains.component';
import { BountyProgramComponent } from './calendar/bounty-program/bounty-program.component';
import { ConferenceComponent } from './calendar/conference/conference.component';
import { ExchangesComponent } from './calendar/exchanges/exchanges.component';
import { ForksComponent } from './calendar/forks/forks.component';
import { IcoComponent } from './calendar/ico/ico.component'; 
import { MeetupsComponent } from './calendar/meetups/meetups.component';
import { PartnershipComponent } from './calendar/partnership/partnership.component';
import { WalletComponent } from './wallet/GetAWallet/wallet.component';
import { NewsComponent } from './news/news.component';
import { MineComponent } from './mine/mine.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { SharedModule } from './shared.module';
import { TokenListComponent } from './development/tokens/token-list/token-list.component';
import { DeadcoinsComponent } from './crypto/deadcoins/deadcoins.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { CommonwalletComponent } from './wallet/commonwallet/commonwallet.component';
import { CryptocardsComponent } from './wallet/cryptocards/cryptocards.component';
import { EquipmentComponent } from './mine/equipment/equipment.component';
import { ContractComponent } from './mine/contract/contract.component';
import { PoolComponent } from './mine/pool/pool.component';


import { LegalityComponent } from './crypto/legality/legality.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { InfiniteScrollerDirective } from './directive/infinite-scroller.directive';
import { FakeaddressComponent } from './crypto/fakeaddress/fakeaddress.component';

@NgModule({
  declarations: [
    AppComponent,
    NestedMenuComponent,
    HomeComponent,
    TradingComponent,
    FooterComponent,
    PizzaPartyComponent,
    HeaderComponent,
    CoinpriceComponent,
    TransformPipe,
    TokensComponent,
    CoindetailsComponent,
    CalendarComponent,
    AirdropsComponent,
    BlockchainsComponent,
    BountyProgramComponent,
    ConferenceComponent,
    ExchangesComponent,
    ForksComponent,
    IcoComponent,
    MeetupsComponent,
    PartnershipComponent,
    WalletComponent,
    NewsComponent,
    MineComponent,
    ExchangeComponent,
    TokenListComponent,
    DeadcoinsComponent,
    CommonwalletComponent,
    CryptocardsComponent,
    EquipmentComponent,
    ContractComponent,
    PoolComponent,
    LegalityComponent,
    InfiniteScrollerDirective,
    FakeaddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    ScrollToModule.forRoot(), 
    CountdownTimerModule,
    HighchartsChartModule,
    SharedModule,
    NgCircleProgressModule.forRoot(),
    NgxTwitterTimelineModule.forRoot()
  ],
  providers: [RequestdataService,AppData],
  bootstrap: [AppComponent],
  entryComponents: [PizzaPartyComponent]
})
export class AppModule { }

