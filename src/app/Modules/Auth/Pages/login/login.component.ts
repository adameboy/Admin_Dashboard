import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Core/Services/auth.service';
import { loginAction } from "src/app/Core/state/app/app.actions";
import { selectLoading } from 'src/app/Core/state/app/app.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isLoading$: Observable<boolean> = this.store.select(selectLoading);
  constructor(
    private router: Router,
    private store: Store,
    private fb: FormBuilder,
    private auth: AuthService) {

  }
  ngOnInit(): void {
    this.form = this.fb.group(
      {
        username: this.fb.control('icard'),
        password: this.fb.control('Venteks01.'),
      })
  }



  onSubmit() {
    this.store.dispatch(loginAction({
      command: {
        ...this.form.value,
        plattaform: "",
        so: "",
      }
    }))
    // this.router.navigate(["/"]);
  }
}
