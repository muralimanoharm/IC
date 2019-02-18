import { Component, OnInit,ViewChild,HostListener, Input  } from '@angular/core';
import {environment} from '../../environments/environment';
import { Router, NavigationEnd ,Event, NavigationStart, NavigationCancel, NavigationError} from '@angular/router';


@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.scss']
})
export class NestedMenuComponent implements OnInit {
  position:string;
  showme:boolean = false;
  @ViewChild("sideNavBar") sideNavBar;
  loading = false;
  constructor(private router: Router) {
    this.position = "relative";
    this.router.events.subscribe((event : Event)=>{
      switch(true){
          case event instanceof NavigationStart:{
              this.loading = true;
              break;
          }
          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError:{
              this.loading = false;
              break;
          }
          default: {
              break;
          }
      }
  });
   }
  ngOnInit() {
  }

  GetNightScreenValue(){
    return environment.nightScreen;
  }

  ExpandMenu(){
    this.showme = !this.showme;
    if(this.showme == true)
    {
      this.sideNavBar.nativeElement.classList.add("sideNavBar");
      this.sideNavBar.nativeElement.classList.remove("topnav");
    }else{
      this.sideNavBar.nativeElement.classList.add("topnav");
      this.sideNavBar.nativeElement.classList.remove("sideNavBar");
    }
  }

  HideMenu(){
    if(this.showme == true)
    {
      this.showme = !this.showme;
      this.sideNavBar.nativeElement.classList.add("topnav");
      this.sideNavBar.nativeElement.classList.remove("sideNavBar");
    }
  }
}
