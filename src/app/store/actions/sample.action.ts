import { Action } from '@ngrx/store';

export const ActionType = {
  ADD_ITEM: 'SAMPLE_ACTION',
  CART_ADD: 'CART_ADD',
  CART_REMOVE: 'CART_REMOVE'
}

export class AddNameAction implements Action {
  readonly type = ActionType.ADD_ITEM;
  constructor(public payload: string) {}
}

export class AddToCartAction implements Action {
  readonly type = ActionType.CART_ADD;
  constructor() {}
}

export class RemoveFromCartAction implements Action {
  readonly type = ActionType.CART_REMOVE;
  constructor() {}
}
