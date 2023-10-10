import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(@Inject('config') private config: any, private readonly http: HttpClient) {
    const { key } = config

    if (!key) {
      throw new Error('Invalid api key')
    }
  }

  getMessage(message: string) {
    return message
  }
}
