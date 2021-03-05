import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiscService {

  constructor() { }

  convert2VND(value: number) {
    return (new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value));
  }
}
