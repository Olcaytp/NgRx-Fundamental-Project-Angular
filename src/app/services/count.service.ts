import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  serviceNumber: number = 0;

  constructor() { }
}
