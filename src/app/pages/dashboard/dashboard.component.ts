import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbMenuItem, NbSidebarService } from '@nebular/theme';
import { UserProfile } from 'src/app/models/user_profile.model';
import { UserService } from 'src/app/services/user/user.service';
import { LogoutComponent } from './pages/dialogs/logout/logout.component';
import { ProfileComponent } from './pages/dialogs/profile/profile.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tools: NbMenuItem[] = [
    {
      title: 'Courses',
      icon: 'layers-outline',
      expanded: true,
      link: 'courses/explore'
    },
    {
      title: 'Studio',
      icon: 'pantone-outline',
      expanded: true,
      link: 'studio'
    }
  ];
  user: any;
  constructor(
    private sidebarService: NbSidebarService,
    private userService: UserService,
    private dialog: NbDialogService
  ) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
  getUserProfile() {
    this.userService.getAccountOfUser().then((value) => {
      this.user = value;
      console.log(this.user);
    }).catch((e) => {
      console.log(e);
    });
  }
  onLogout() {
    let dialog = this.dialog.open(LogoutComponent, {
      context: {

      }, hasBackdrop: true,
      backdropClass: 'backdrop-blur',
      closeOnBackdropClick: false,
    });
  }
  openProfile() {
    this.dialog.open(ProfileComponent, {
      context: {

      }, hasBackdrop: true,
      backdropClass: 'backdrop-blur',
      closeOnBackdropClick: false,
    });
  }
}
