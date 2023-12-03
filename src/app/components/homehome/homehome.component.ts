import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-homehome',
  templateUrl: './homehome.component.html',
  styleUrls: ['./homehome.component.css']
})
export class HomehomeComponent {
  userName:any;
  loggedIn: boolean = false;
  options: AnimationOptions = {
    path: './images/Animation - 1699709825403.json',
  };
  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
    // Retrieve the user's name from the ServicesService
    this.servicesService.Name$.subscribe(name => {
      console.log('Name received:', name);
      this.userName= name;
      this.loggedIn = !!name;
      // Do something with the name, e.g., update the UI
    });


  }
logout(){
  this.servicesService.removetoken();
}
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
