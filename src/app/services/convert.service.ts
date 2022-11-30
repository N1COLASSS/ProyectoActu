import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {


  apiURL:string = '';

  constructor(private httpClient:HttpClient) { 
    this.apiURL = `https://mindicador.cl/api`
  }
}


