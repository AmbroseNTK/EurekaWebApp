import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  styles: [`
  :host nb-tab {
    padding: 1.25rem;
    decoration: none;
  }
`]
})
export class CoursesComponent implements OnInit {

  tabs = [
    {
      title: 'Explore',
      route: '/dashboard/courses/explore',
      icon: 'home-outline',
      responsive: true
    },
    {
      title: 'My Courses',
      route: '/dashboard/courses/my-courses',
      icon: 'person-outline',
      responsive: true
    },
    {
      title: 'Search',
      icon: 'search-outline',
      route: '',
      active: false,
      disabled: true,
      responsive: true
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
