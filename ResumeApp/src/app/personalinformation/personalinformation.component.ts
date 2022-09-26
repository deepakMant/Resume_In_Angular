import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-personalinformation',
  templateUrl: './personalinformation.component.html',
  styleUrls: ['./personalinformation.component.css']
})
export class PersonalinformationComponent implements OnInit {
  @Input() personalinfo:any = [];
  @Input() name = ""
  @Input() img:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
