import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-economics',
  templateUrl: './economics.component.html',
  styleUrls: ['./economics.component.scss']
})
export class EconomicsComponent implements OnInit {
  title:string;
  constructor(private _Activatedroute:ActivatedRoute) {
    _Activatedroute.params.subscribe(val => {
       this.title = val.id;
    }); 
   }

  ngOnInit() {
  }

}
