
import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  count = 1;
  adult = 1;
  child = 0;

  constructor(
    // private route: ActivatedRoute,
    // private location: Location
  ) { }

  ngOnInit() {
  }

  // login(): void {
  //   this.location.go(path: dashboard);
  //   // go(path: string, query?: string, state?: any): void;
  // }
  Decreaseval(){
    this.count=this.count>1?this.count-1:this.count;
    
  }
  Increaseval(){
    this.count=this.count<5?this.count+1:this.count;
  }
  AdultDecreaseval(){
    this.adult=this.adult>1?this.adult-1:this.adult;
  }
  AdultIncreaseval(){
    if(this.count ===1 && this.adult === 4){
      return;
    }
    this.adult=this.adult<12?this.adult+1:this.adult;
  }
  ChildDecreaseval(){
    this.child=this.child>1?this.child-1:this.child;
  }
  ChildIncreaseval(){
   
    this.child=this.child<4?this.child+1:this.child;
  }



}
