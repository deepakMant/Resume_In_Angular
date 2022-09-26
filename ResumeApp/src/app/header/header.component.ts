import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() name = "";
@Input() email = "";
@Input() title = "";
@Input() githubUrl = "";
@Input() linkdinUrl = "";
@Input() phone = 91;
@Input() address:any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
