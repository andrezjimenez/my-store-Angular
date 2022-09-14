import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://secure.gravatar.com/avatar/2b3b2e2a091bdc9b7c7fe1f1c0bb8bd3?s=120&d=mm&r=g';

  onLoaded(img: string){
    console.log ('log Padre' , img);
  }

}



