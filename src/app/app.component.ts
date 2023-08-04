import { AfterViewInit, Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AuthService } from './Core/Services/auth.service';
import { Observable, delay, first } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';
import { autoLoginAction, setErrorApp } from 'src/app/Core/state/app/app.actions';
import { IAuth } from './Core/Interfaces/Responses/IAuth';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Admin';
  $isAuth: Observable<IAuth | null>;

  /**
   *
   */
  constructor(
    private actions$: Actions,
    private store: Store,
    private auth: AuthService) {
    this.$isAuth = auth.isAuth$;
  }


  ngOnInit(): void {
    this.store.dispatch(autoLoginAction());
    this.actions$.pipe(ofType(setErrorApp)).subscribe(x => {
      alert(x.error)
    });
    this.$isAuth.pipe(delay(1000)).subscribe(() => initFlowbite())
  }


}
