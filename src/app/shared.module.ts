import { NgModule } from '@angular/core';
import { Page404Component} from './page404/page404.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';
import { OrderByPipe} from './pipes/orderBy.pipe';
import { ShareComponent } from './share/share.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
    imports: [],
    declarations: [Page404Component,FilterPipe,HighlightPipe,OrderByPipe,ShareComponent, SafePipe],
    exports:[Page404Component,FilterPipe,HighlightPipe,OrderByPipe,ShareComponent,SafePipe]
  })

export class SharedModule { }