import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css','./banner.responsive.component.css']
})
export class BannerComponent implements OnInit {
  @Input()
  coverBanner:string = "";
  @Input()
  contentLeft:string = "";
  @Input()
  contentRight:string = "";
  @Input()
  bannerText:string ="";
  @Input()
  bannerTextButton:string ="";

  showLeft:boolean = true;
  showRight:boolean = true;

  constructor() { }

  ngOnInit(): void {
    if(this.contentRight == ""){
      this.showRight = false;
    }
    if(this.contentLeft == ""){
      this.showLeft = false;
    }
  }

}
