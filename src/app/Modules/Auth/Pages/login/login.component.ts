import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  /**
   *
   */
  constructor(
    private router: Router,
    private auth: AuthService) {

  }
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });


  onSubmit() {
    this.auth.emitBooleanValue(true);
    this.router.navigate(["/dashboard"]);
  }
}
