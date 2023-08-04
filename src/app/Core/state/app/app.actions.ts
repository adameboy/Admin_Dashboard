import { createAction, props } from "@ngrx/store";
export const setLoading = createAction(
    "[App] Set loading",
    props<{ loading: boolean }>()
);

export const dummyAction = createAction(
    '[App] Dummy App Action'
);
