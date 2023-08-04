import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState, initialState } from "./app.state";
import { setLoading } from "./app.actions";

const appReducer = createReducer(
    initialState,
    on(setLoading, (state, { loading }) => ({
        ...state,
        loading
    })),
);


export function reducer(state: AppState | undefined, action: Action) {
    return appReducer(state, action);
}

export const selectAppState = createFeatureSelector<AppState>('app');