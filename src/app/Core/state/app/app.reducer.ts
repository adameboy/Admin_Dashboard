import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState, initialState } from "src/app/Core/state/app/app.state";
import { loginAction, loginActionSuccess, logoutAction, setErrorApp, setLoading } from "src/app/Core/state/app/app.actions";

const appReducer = createReducer(
    initialState,
    on(setLoading, (state, { loading }) => ({
        ...state,
        loading
    })),
    on(setErrorApp, (state) => ({
        ...state,
        loading: false
    })),
    on(loginAction, (state) => ({
        ...state,
        loading: true
    })),
    on(loginActionSuccess, (state, { auth }) => ({
        ...state,
        auth,
        loading: false
    })),
    on(logoutAction, (state) => ({
        ...state,
        auth: null
    })),
);


export function reducer(state: AppState | undefined, action: Action) {
    return appReducer(state, action);
}

export const selectAppState = createFeatureSelector<AppState>('app');
export const selectAppAuth = createSelector(
    selectAppState,
    (state) => state.auth
);
export const selectLoading = createSelector(
    selectAppState,
    (state) => state.loading
);
