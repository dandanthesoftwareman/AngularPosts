import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Posts:Post[] = [
    {
      title:"Tina",
      body:"I'm gonna beat you in Forza"
    },
    {
      title:"Yanni",
      body:"Good Luck"
    }
  ];

}
