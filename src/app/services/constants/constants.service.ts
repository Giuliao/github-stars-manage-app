import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {


  private constants = {
    accessTokenStr: "access_token"
  }

  constructor() { 
  }


  public get() {
    return this.constants;
  }
}
