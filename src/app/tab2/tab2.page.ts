import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  carList : string[]= ["assets/img/bugatti.jfif", "assets/img/lambo.jfif" ,"assets/img/koeni.jfif" , "assets/img/lambor.jfif" ,"assets/img/mercedez.jfif" , "assets/img/senna.jpg" ]
  constructor() {}

}
