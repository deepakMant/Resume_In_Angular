import { Component } from '@angular/core';
import {GetDataService } from "./getData/get-data.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  resume = {
//   name : "Deepak Mantro",
//   email : "Deepakmantro@gmail.com",
//   phone :  7696220900,
//   title : "Front End/UI Developer",
//   githubUrl : "https://github.com/deepakMant",
//   linkdinUrl : "linkedin.com/in/deepak-mantro-526a70a9",
//   address : ["VPO. : BHAGAL","TEH. : GHULA","DISTT : KAITHAL","(HARYANA) PIN-136034"
//   ],
//   objective : "I want to serve the organization at my level best effort and want to become it's essential part by enhancing its overall effectiveness and undertaking challenging responsibilites",
//   skills : [
//     "HTML","CSS","JavaScript","Angula2","Bootstrap","Debugging","Problem Solving"
//   ],
//   projects : [
//     "Swag Of India", "Angular Resume","Foody", "Photo Gallery" ,"Responsive NavBar", "Tvastra Hosptal Web in Node.Js amd Mongo Db", "eCommerce Web", "Beautiful Resume", "Todo List"
//   ],
//   workExperience : [
//     "1 year experience in markting and trading in agro products",
//     "4 year experience as electrical mechanic in Mantro Electrical works."
//   ],
//   education : [
//     {
//       school : "KURUKSHETRA UNIVERSITY",
//       programe : "BA 3RD YEAR",
//       board : "KUK",
//       year : 2022,
//       percentage : "Processing"

//     },
//     {
//       school : "CIPET Central institute of plastic enginnring techonolgy murthal Haryana",
//       programe : "Extrusion processs and qulity and cantrolh",
//       board : "Cipte Haryana",
//       year : 2015,
//       percentage : "A"

//     },
//     {
//       school : "GSSS Bhagal",
//       programe : "12th",
//       board : "HBSE",
//       year : 2009,
//       percentage : 56

//     },
//     {
//       school : "Tagore Ball Niketan Pehowa",
//       programe : "10th",
//       board : "HBSE",
//       year : 2007,
//       percentage : 72

//     }
//   ],
//   basiceknoeledge : [
//     "NODE.JS","MONGODB","JAVA","ELECTRICAL EQUPMENTS","MARKETING","BUSINESS DEVELOPMENT"
//   ],
//   strengths : [
//     	"Honesty, Punctuality, Hard Working, cooperative and Sincerity.",
//       "Self starter with the ability to multitask, exceptional organization and administration skills.",
//       "Passionate for Experience and learn new technology."

//   ],
//   personalinfo : [
//     {
//       father: "SH. OM PARKAS MANTRO",
//       mother : "SMT. RAJ RANI",
//       birth : "10th SEPTEMBER 1992",
//       gender	: "Male",
//       languages : "English, Hindi, Punjabi Haryanvi ,",
//       hobbies	: "Internet Surfing, Reading books, interfacing with new people.",
//       nationality	: "Indian"

//     }
//   ],
//   image : "https://signature.freefire-name.com/img.php?f=2&t=Diva"
    
//  }

 resume:any = {}
 constructor (private dataLoad : GetDataService) {
  this.dataLoad.getUserData().subscribe(
    data => {
      this.resume = data;
    }
  )
 }
}
