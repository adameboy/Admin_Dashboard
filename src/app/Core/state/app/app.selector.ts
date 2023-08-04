import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const selectApp = createFeatureSelector<AppState>("app");

// ✨ New 👇
export const selectAppLoading = createSelector(
    selectApp,
    (state: AppState) => state.loading
);