import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddNameAction, AddToCartAction, RemoveFromCartAction } from './store/actions/sample.action';
import { AppState } from './store/state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  name: string = "";

  constructor(public router: Router, public store: Store<AppState>) {
  }

  redirect(){
    setTimeout(() => {
      const customEvent = new CustomEvent('eventFromMfe', { detail: { name: this.name } });
      window.dispatchEvent(customEvent);
    },1000);
    this.router.navigate(["/mfe1"]);
    this.store.dispatch(new AddNameAction(this.name));
  }

  addItemToCart() {
    this.store.dispatch(new AddToCartAction());
  }

  removeItemFromCart() {
    this.store.dispatch(new RemoveFromCartAction());
  }

  get cartState() {
    return this.store.select(state => state.sampleState);
  }
}
