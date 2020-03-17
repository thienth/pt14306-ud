import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  title = "Danh sách hero";
  heroList = [
    {
      id: 1,
      name: 'superman',
      gender: 1,
      img: 'https://genk.mediacdn.vn/thumb_w/640/2019/11/27/image-asset-15748328066771070510119-crop-1574832813771416382186.jpeg'
    },
    {
      id: 2,
      name: "spider man",
      gender: 1,
      img: 'https://cnet1.cbsistatic.com/img/IaaiXEIeguAm35DMmxIuPH8in14=/1092x0/2019/07/01/ed0fb719-ac3a-44ee-b812-7ea8671a2ece/screen-shot-2019-07-01-at-10-16-27-am.png'
    },
    {
      id: 3,
      name: "wonder woman",
      gender: 2,
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Wonder_Woman.jpg/250px-Wonder_Woman.jpg'
    },
    {
      id: 4,
      name: "Black Widow",
      gender: 2,
      img: 'https://znews-photo.zadn.vn/w0/Uploaded/mdf_rkxrxd/2019_04_29/Black_Widow_2.jpg'
    }
  ];

  customeHero = {
    id: null,
    name: null,
    img: null,
    gender: 1
  }

  saveHero(){
    // 1. tìm đc cái id lớn nhất trong mảng heroList
    let maxId = 0;
    this.heroList.forEach(function(item){
      if(item.id >= maxId){
        maxId = item.id;
      }
    });
    // 2. gán lại giá trị của customeHero.id = giá trị lớn nhất + 1 
    this.customeHero.id = ++maxId;
    // 3. push customeHero vào trong heroList
    this.heroList.push(this.customeHero);
    // 4. Trả lại giá trị gốc cho customeHero
    this.customeHero = {
      id: null,
      name: null,
      img: null,
      gender: 1
    }
  }

  removeHero(hero){
    this.heroList = this.heroList.filter(function(item){
      return item != hero;
    });
  }


  constructor() { }

  ngOnInit(): void {
  }

}
