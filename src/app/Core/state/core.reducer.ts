import { ActionReducer, ActionReducerMap, INIT, MetaReducer } from "@ngrx/store";
import { State } from "./core.state";
import * as AppReducer from "./app/app.reducer";
// import * as AuthReducer from "./auth/auth.reducer";
// import * as UsersReducer from "./users/users.reducer"
// import * as DashboardReducer from "./dashboard/dashboard.reducer"
// import * as InvoiceReducer from "./invoices/invoice.reducer"
// import * as CatalogsReducer from "./catalogs/catalogs.reducer"
// import * as BankResumeReducer from "./bankResume/bankResume.reducer"
// import { logout } from "./auth/auth.actions";

export const reducers: ActionReducerMap<State> = {
    app: AppReducer.reducer,
    // auth: AuthReducer.authReducer,
    // users: UsersReducer.usersReducer,
    // dashboard: DashboardReducer.dashboardReducer,
    // invoices: InvoiceReducer.invoicesReducer,
    // catalogs: CatalogsReducer.catalogsReducer,
    // bankResume: BankResumeReducer.bankResumeReducer
};
const cleanStore = (reducer: ActionReducer<any>) => {
    return (state: any, action: any) => {
        // if (action?.type === logout.type) {
        //     return reducer(undefined, { type: INIT })
        // }
        return reducer(state, action)
    }
}
export const metaReducers: MetaReducer<State>[] = [cleanStore];
