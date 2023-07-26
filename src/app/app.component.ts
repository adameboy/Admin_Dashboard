import { AfterViewInit, Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AuthService } from './Core/Services/auth.service';
import { Observable, delay, first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Admin';
  $isAuth: Observable<boolean>;

  /**
   *
   */
  constructor(private auth: AuthService) {
    this.$isAuth = auth.isAuth$;
  }


  ngOnInit(): void {
    this.$isAuth.pipe(delay(1000)).subscribe(() => initFlowbite())
  }


}
