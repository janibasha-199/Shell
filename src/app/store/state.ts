import { ActionReducerMap } from "@ngrx/store";
import { initialSampleListState, SampleListState, SampleReducer } from "./reducers";

export const rootReducer = {};

export interface AppState {
    sampleState: SampleListState;
};

export const initialAppState: AppState = {
    sampleState: initialSampleListState
}
export const reducers: ActionReducerMap<AppState, any> = {
    sampleState: SampleReducer
};