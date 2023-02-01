import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Observable } from 'rxjs';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlappService {
  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public changeValue(state:boolean){
    this.loading.next(state)
  }
  
  constructor() { }
}
