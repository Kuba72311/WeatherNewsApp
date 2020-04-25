import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IrishNewsService} from '../Service/irish-news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  IrishNewsStories:any=[];
  constructor(public router: Router,private newsService:IrishNewsService) { 

  }

  ngOnInit(){
    //receive data from the api on start up and assign it on an array
    this.newsService.getLatestNewsStories().subscribe(
      (data)=>{
        this.IrishNewsStories = data.articles;
      }
    );
  }

  goHome(){
    this.router.navigateByUrl('/home');
  }

}
