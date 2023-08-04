import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { Store } from "@ngrx/store"
import { withLatestFrom, mergeMap, of, map, catchError, tap } from "rxjs"
import * as AppActions from 'src/app/Core/state/app/app.actions';
import { AuthService } from "../../Services/auth.service";
import { handleError } from "../../Utils/handleError";
@Injectable()
export class AppEffects {

    constructor(
        private actions$: Actions,
        private store: Store,
        private authService: AuthService
    ) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.loginAction),
            mergeMap(({ command }) => {
                return this.authService.login(command)
                    .pipe(
                        map(({ data }) => {
                            this.authService.saveAuth(data);
                            return AppActions.loginActionSuccess({ auth: data });
                        }),
                        catchError((error) => {
                            return of(AppActions.setErrorApp({ error: handleError(error) }))
                        })
                    )
            })
        ))
    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.logoutAction),
            tap(() => {
                return this.authService.logout()
            })
        ), { dispatch: false })
    autoLoginAction$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.autoLoginAction),
            mergeMap(() => {
                const auth = this.authService.getAuth();
                if (auth) {
                    return of(AppActions.loginActionSuccess({ auth }))
                }
                return of(AppActions.dummyAction())
            })
        ))
    // getCatalogs$ = createEffect(() =>
    //   this.actions$.pipe(
    //     ofType(AppActions.getCatalogs),
    //     withLatestFrom(this.store.select(selectCatalogs)),
    //     mergeMap(([action, catalogs]) => {
    //       if (catalogs[0].length != 0)
    //         return of(AppActions.dummyAction())
    //       return this.catalogsService.getUsersCatalog()
    //         .pipe(
    //           //delayedRetry(1000, 2),
    //           map((catalogs) => {
    //             return AppActions.getCatalogsSuccess({ catalogs })
    //           }),
    //           catchError((error) => {
    //             return of()
    //           })
    //         )
    //     })
    //   )
    // )
}
