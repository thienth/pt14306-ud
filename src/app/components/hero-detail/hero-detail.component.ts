import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() heroData;

  @Output() onRemoveEvent = new EventEmitter();
  
  removeEventFire(){
    this.onRemoveEvent.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
