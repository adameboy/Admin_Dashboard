import { createAction, props } from "@ngrx/store";
import { LoginCommand } from "src/app/Core/Interfaces/Commands/LoginCommand";
import { IAuth } from "src/app/Core/Interfaces/Responses/IAuth";
export const setLoading = createAction(
    "[App] Set loading",
    props<{ loading: boolean }>()
);
export const dummyAction = createAction(
    '[App] Dummy App Action'
);
export const loginAction = createAction(
    '[App] login App Action',
    props<{ command: LoginCommand }>()
);
export const loginActionSuccess = createAction(
    '[App] login App Action Success',
    props<{ auth: IAuth }>()
);
export const logoutAction = createAction(
    '[App] logout App Action'
);
export const autoLoginAction = createAction(
    '[App] Check if user is login Action'
);
export const setErrorApp = createAction(
    "[App] Set Error App",
    props<{ error: string }>()
);

