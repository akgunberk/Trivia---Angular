import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {

  constructor() { }
  
  randomNumber(upTo: number) {
    return Math.floor(Math.random() * Math.floor(upTo));
  }
}
