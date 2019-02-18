import { forwardRef,NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaqComponent} from './faq/faq.component';
import { CryptoComponent } from './crypto.component';
import { MatMenuModule} from '@angular/material/menu';
import { DemoMaterialModule} from '../material.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { SharedModule } from '../shared.module';
import { DefinitionComponent} from '../basics/definition/definition.component';
import { DefineComponent } from './define/define.component';
import { ArchitectureComponent } from './architecture/architecture.component'
import { EconomicsComponent } from './economics/economics.component';
import { ReceptionComponent } from './reception/reception.component';
import { ProsandconsComponent } from './prosandcons/prosandcons.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { LegalityComponent} from './legality/legality.component';

export const routes: Routes = [
    { path : '',pathMatch:'full',redirectTo:'Crypto'}, 
    { path : 'Crypto', component: CryptoComponent,
        children: [
        { path : '' , redirectTo:'faq'},
        { path : 'faq' , component:FaqComponent},
        { path : 'definition/:id' , component:DefinitionComponent,
            children:[
                { path : 'define/:id' , component:DefineComponent }
            ]
        },
        { path:'architecture/:id', component:ArchitectureComponent},
        { path:'economics/:id',component:EconomicsComponent},
        { path:'reception/:id',component:ReceptionComponent},
        { path:'miscellaneous/:id',component:MiscellaneousComponent},
        { path:'legality/:id',component:LegalityComponent}
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
        CryptoComponent,
        FaqComponent,
        DefinitionComponent, 
        DefineComponent, 
        ArchitectureComponent,
        EconomicsComponent,
        ReceptionComponent,
        ProsandconsComponent,
        LegalityComponent,
        MiscellaneousComponent
    ]
  })
  export class CryptoModule { }