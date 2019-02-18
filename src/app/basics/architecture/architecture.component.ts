import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.scss']
})

export class ArchitectureComponent implements OnInit {
  title:string;
  Blockchain:boolean;
  Timestamping:boolean;
  ProofofWork:boolean;
  ProofofStake:boolean;
  Programming:boolean;
  Mining:boolean;
  Wallet:boolean;
  Anonymity:boolean;
  Fungibiity:boolean;
  constructor(private _Activatedroute:ActivatedRoute, private router:Router) {
    _Activatedroute.params.subscribe(val => {
       this.title = val.id;
    }); 
   }
  ngOnInit() {
  }
}
