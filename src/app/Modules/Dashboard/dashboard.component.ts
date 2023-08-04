import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { fader, slider } from 'src/app/route-animations';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [fader]
})
export class DashboardComponent {

  constructor(private router: Router) {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

}
