import { Component } from '@angular/core';
import UsersJson from './sports.json';
import NewsJson from './news.json';
import News1Json from './news1.json';
import MainJson from './main.json';
import PopularJson from './reviews.json';
import FashionJson from './fashion.json';
import Fashion1Json from './fashion1.json';
import Fashion2Json from './fashion2.json';
 
interface USERS {
    author: string;
    title: String;
    description: string;
    url:string;
    urlToImage:string;
    publishedAt:string;
    content: String;
}
interface USERS1 {
  id:number;
  author: string;
  title: String;
  description: string;
  url:string;
  urlToImage:string;
  publishedAt:string;
  content: String;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProject';
  today: Date = new Date(); 

  Users: USERS[] = UsersJson;
  News: USERS[] = NewsJson;
  News1:USERS1[] = News1Json;
  Main:USERS[] = MainJson;
  Popular:USERS1[] = PopularJson;
  Fashion:USERS[]=FashionJson;
  Fashion1:USERS[]=Fashion1Json;
  Fashion2:USERS[]=Fashion2Json;

  constructor(){
    console.log(this.Users);
    console.log(this.News);
  }
  
}