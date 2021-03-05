import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { UserProfile } from 'src/app/models/user_profile.model';
import { UserService } from 'src/app/services/user/user.service';

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
    private userService: UserService
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
}
