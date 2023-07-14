import { Component } from '@angular/core';
import { NavToolbarService } from '../../../services/shared.navtoolbar.service';

@Component({
  selector: 'app-deployment-details',
  templateUrl: './deployment-details.component.html',
  styleUrls: ['./deployment-details.component.scss'],
})
export class DeploymentDetailsComponent {
  public isDesktop: boolean;

  constructor(private navToolbarService: NavToolbarService) {
    this.navToolbarService.getScreenSize().subscribe({
      next: (isDesktop) => {
        this.isDesktop = isDesktop;
        // console.log(this.isDesktop);
      },
    });
  }

  public toggleBurgerMenu(value: boolean) {
    this.navToolbarService.toggleBurgerMenu(value); //always false in this case
  }
}
