import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-story',
  templateUrl: './post-story.component.html',
  styleUrls: ['./post-story.component.scss']
})
export class PostStoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectImage(event) {
    console.log(event)
  }

}
