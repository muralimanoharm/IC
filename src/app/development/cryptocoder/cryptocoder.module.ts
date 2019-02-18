import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**Necessary Things */
import { MatMenuModule} from '@angular/material/menu';
import { DemoMaterialModule} from '../../material.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { SharedModule } from '../../shared.module';
/** */
import {CryptocoderComponent} from '../cryptocoder/cryptocoder.component';
import { BlockchaindevComponent } from '../cryptocoder/blockchaindev/blockchaindev.component';
import { CryptoeconomicsComponent } from '../cryptoeconomics/cryptoeconomics.component';
import { EcosystemComponent } from '../cryptocoder/ecosystem/ecosystem.component';



export const routes: Routes = [
    { path : '',pathMatch:'full',redirectTo:'cryptocoder'},
    { path:'cryptocoder',component:CryptocoderComponent,
      children:[
          {path:'blockchaindev/:id',component:BlockchaindevComponent},
          {path:'ecosystem/:id', component:EcosystemComponent}
      ]      
    }
]

@NgModule({
    imports: [
        CommonModule,
        MatMenuModule,
        DemoMaterialModule,
        ScrollToModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        CryptocoderComponent,
        BlockchaindevComponent,
        CryptoeconomicsComponent,
        EcosystemComponent
    ]
  })
  export class CryptoCoderModule { }