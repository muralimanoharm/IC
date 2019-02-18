import { NgModule } from '@angular/core';
import { Page404Component} from './page404/page404.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';
import { OrderByPipe} from './pipes/orderBy.pipe';
import { ShareComponent } from './share/share.component';

@NgModule({
    imports: [],
    declarations: [Page404Component,FilterPipe,HighlightPipe,OrderByPipe,ShareComponent],
    exports:[Page404Component,FilterPipe,HighlightPipe,OrderByPipe,ShareComponent]
  })

export class SharedModule { }