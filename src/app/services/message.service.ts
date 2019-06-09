import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../shared/models/message';

@Injectable()
export class MessageService {
  private API = 'https://us-central1-demoapp-1779c.cloudfunctions.net/v1';

  constructor(private http: HttpClient) {}

  fetch(cname: string): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.API}/channels/${cname}/messages`);
  }
}
