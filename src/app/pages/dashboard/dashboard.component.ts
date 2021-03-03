import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

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
      link: 'courses'
    },
    {
      title: 'Studio',
      icon: 'pantone-outline',
      expanded: true,
      link: 'studio'
    }
  ];
  constructor(
    private sidebarService: NbSidebarService
  ) { }

  ngOnInit(): void {
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
