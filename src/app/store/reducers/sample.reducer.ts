import * as ActionsList from '../actions/sample.action';


export interface SampleListState {
    name: string;
    quantity: number
}

export const initialSampleListState: SampleListState = {
    name: "",
    quantity: 0
}


export const SampleReducer = (
    state: SampleListState = initialSampleListState,
    action: ActionsList.AddNameAction
): SampleListState => {
    switch (action.type) {
        case ActionsList.ActionType.ADD_ITEM:
            return {
                ...state,
                name: action.payload
            };
        case ActionsList.ActionType.CART_ADD:
            return {
                ...state,
                quantity: state.quantity + 1
            };
        case ActionsList.ActionType.CART_REMOVE:
            return {
                ...state,
                quantity: state.quantity - 1
            };
        default:
            return state;
    }
}