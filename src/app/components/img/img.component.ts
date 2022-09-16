import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img : string = '';
  @Output() loaded = new EventEmitter<string>();

  imgDefault : string = '';
  constructor() { }

  ngOnInit(): void {
  }
  imgError(){
    this.img = this.imgDefault='https://www.colombianosune.com/sites/default/files/asociaciones/NO_disponible-43_7.jpg';
  }
  imgLoaded(){
    console.log('load hijo');
    this.loaded.emit(this.img);

  }
 
}
