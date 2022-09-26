import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-basiceknowledge',
  templateUrl: './basiceknowledge.component.html',
  styleUrls: ['./basiceknowledge.component.css']
})
export class BasiceknowledgeComponent implements OnInit {
  @Input() basiceknoeledge:any =[];
  constructor() { }

  ngOnInit(): void {
  }

}
