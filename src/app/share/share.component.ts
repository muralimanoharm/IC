import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  ShareThisPage(shareType:string){
    if(shareType == "facebook"){
      var sTop = window.screen.height/2-(218); 
      var sLeft = window.screen.width/2-(313);
      window.open('https://www.facebook.com/sharer.php?u=' +'http://www.indiancryptos.com'+ this.router.url,'sharer','toolbar=0,status=0,width=626,height=456,top='+sTop+',left='+sLeft);
      return false;
    }else if(shareType == "twitter"){
      var sTop = window.screen.height/2-(218); 
      var sLeft = window.screen.width/2-(313);
      window.open('https://twitter.com/share?url=' +'http://www.indiancryptos.com'+this.router.url,'sharer','toolbar=0,status=0,width=626,height=456,top='+sTop+',left='+sLeft);
      return false;
    }else if(shareType == "linkedin"){
      var sTop = window.screen.height/2-(218); 
      var sLeft = window.screen.width/2-(313);
      window.open('https://www.linkedin.com/cws/share?url=' +'http://www.indiancryptos.com'+ this.router.url +'&amp;title='+ document.title,'sharer','toolbar=0,status=0,width=626,height=456,top='+sTop+',left='+sLeft);
      return false;
    }else if(shareType == "googleplus"){
      var sTop = window.screen.height/2-(218); 
      var sLeft = window.screen.width/2-(313);
      window.open('https://plus.google.com/share?url='+'http://www.indiancryptos.com'+this.router.url,'sharer','toolbar=0,status=0,width=626,height=456,top='+sTop+',left='+sLeft);
      return false;
    }else if(shareType == "reddit"){
      var sTop = window.screen.height/2-(218); 
      var sLeft = window.screen.width/2-(313);
      window.open('https://reddit.com/submit?url='+'http://www.indiancryptos.com'+this.router.url+'&amp;title='+ document.title,'sharer','toolbar=0,status=0,width=626,height=656,top='+sTop+',left='+sLeft);
      return false;
    }
  }
}
