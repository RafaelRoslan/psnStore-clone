import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
  @Input()
  shocaseTitle:string="";
  @Input()
  linkText:string ="";
  
  constructor() { }

  ngOnInit(): void {
  }

}
