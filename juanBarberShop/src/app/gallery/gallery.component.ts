import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public pics: Array<any> = new Array<any>()

  constructor() { }

  ngOnInit(): void {
    this.get_all_pics()
  }

  get_all_pics(){
    this.pics.push({name:"pic.jpg", picture: "../../assets/pictures/jb_logo.png"})
    this.pics.push({name:"pic.jpg", picture: "../../assets/pictures/jb_logo.png"})
    this.pics.push({name:"pic.jpg", picture: "../../assets/pictures/jb_logo.png"})
    this.pics.push({name:"pic.jpg", picture: "../../assets/pictures/jb_logo.png"})
    this.pics.push({name:"pic.jpg", picture: "../../assets/pictures/jb_logo.png"})
  }

}
