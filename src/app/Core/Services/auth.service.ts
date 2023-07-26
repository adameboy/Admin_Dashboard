import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private booleanSubject: BehaviorSubject<boolean>;
  isAuth$: Observable<boolean>;

  constructor() {
    this.booleanSubject = new BehaviorSubject(true);
    this.isAuth$ = this.booleanSubject.asObservable();
  }




  emitBooleanValue(value: boolean) {
    this.booleanSubject.next(value);
  }
}
