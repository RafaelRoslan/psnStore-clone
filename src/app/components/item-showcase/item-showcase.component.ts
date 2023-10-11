import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-showcase',
  templateUrl: './item-showcase.component.html',
  styleUrls: ['./item-showcase.component.css']
})
export class ItemShowcaseComponent implements OnInit {
  @Input()
  urlImg:string ="";
  @Input()
  titleGame:string ="";
  @Input()
  detailGame:string ="";
  @Input()
  priceGame:string ="";

  showTitle:boolean = true;
  showDetail:boolean = true;
  showPrice:boolean = true;

  constructor() { }

  ngOnInit(): void {
    if(this.titleGame == ""){
      this.showTitle = false;
    }
    if(this.detailGame == ""){
      this.showDetail = false;
    }
    if(this.priceGame == ""){
      this.showPrice = false;
    }
    
  }

}
