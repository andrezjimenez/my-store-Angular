import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy}  from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges {

  @Input() img : string = '';
  @Output() loaded = new EventEmitter<string>();

  imgDefault : string = '';
  // counter  = 0;
  // counterFn: number | undefined;


  constructor() {
      console.log("constructor","imgValue =>", this.img );   
   }
   ngOnChanges() {
      console.log("ngOnChanges","imgValue =>", this.img );
   }

  ngOnInit(): void {
      console.log("ngOnInit","imgValue =>", this.img );
      // this.counterFn = window.setInterval(()=>{
      //   this.counter += 1;
      //   console.log('run counter');
      // },1000);
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    // window.clearInterval(this.counterFn);
    // console.log(this.counterFn);
  }

  imgError(){
    this.img = this.imgDefault='https://www.colombianosune.com/sites/default/files/asociaciones/NO_disponible-43_7.jpg';
  }
  imgLoaded(){
    console.log('load hijo');
    this.loaded.emit(this.img);

  }
 
}
