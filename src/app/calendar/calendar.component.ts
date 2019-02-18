import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  color = 'primary';
  filterTypes = ['AirDrop','Blockchains','BountyProgram','Conference','Exchanges','Forks','ICO','Meetups','Partnership'];
  constructor() { }
  AirDrop = new FormControl();
  Blockchains = new FormControl();
  BountyProgram = new FormControl();
  Conference = new FormControl();
  Exchanges = new FormControl();
  Forks = new FormControl();
  ICO = new FormControl();
  Meetups = new FormControl();
  Partnership = new FormControl();
  ngOnInit() {
    this.AirDrop.setValue(true);
  }

  FilterToggle(filtertype:string){
    this.filterTypes.forEach(filtertypes=>{
      if(filtertypes != filtertype)
      {
        this.SetValue(filtertypes,false);
      }else{
        this.SetValue(filtertypes,true);
      }
    })
  }
  SetValue(filterType:string,value:boolean)
  {
    if(filterType ==  'AirDrop')
    {
      this.AirDrop.setValue(value);
    }
    if(filterType == 'Blockchains')
    {
      this.Blockchains.setValue(value);
    }
    if(filterType == 'BountyProgram')
    {
      this.BountyProgram.setValue(value);
    }
    if(filterType == 'Conference')
    {
      this.Conference.setValue(value);
    }
    if(filterType == 'Exchanges')
    {
      this.Exchanges.setValue(value);
    }
    if(filterType == 'Forks')
    {
      this.Forks.setValue(value);
    }
    if(filterType == 'ICO')
    {
      this.ICO.setValue(value);
    }
    if(filterType == 'Meetups')
    {
      this.Meetups.setValue(value);
    }
    if(filterType == 'Partnership')
    {
      this.Partnership.setValue(value);
    }
  }
}
