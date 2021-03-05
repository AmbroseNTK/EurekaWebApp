import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiscService {

  constructor() { }

  convert2VND(value: number) {
    return (new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value));
  }
  getShortTitle(title: string) {
    if (title === undefined || title === '' || title === null) {
      return;
    }
    if (title.length > 20) {
      return title.substr(0, 15) + ' ...';
    }
    return title;
  }
}
