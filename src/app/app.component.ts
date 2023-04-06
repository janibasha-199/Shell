import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  name: string = "";

  constructor(public router: Router) {
  }

  redirect(){
    setTimeout(() => {
      const customEvent = new CustomEvent('eventFromMfe', { detail: { name: this.name } });
      window.dispatchEvent(customEvent);
    },1000)
    this.router.navigate(["/mfe1"]);
  }
}
