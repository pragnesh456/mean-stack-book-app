// Decorators
import { Injectable } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// HTTP
import { HttpClient } from '@angular/common/http';

// Models
import { ServerResponse } from '../models/server-response.model';
import { User } from '../models/user.model';

import { environment } from '../../../environments/environment';

const baseUrl =  environment.serverURL + '/user';
const registerEndpoint = baseUrl + '/register';
const loginEndpoint = baseUrl + '/login';
const profileEndpoint = baseUrl + '/profile/';
const getPurchaseHistoryEndpoint = baseUrl + '/purchaseHistory';
const changeAvatarEndpoint = baseUrl + '/changeAvatar';
const blockCommentsEndpoint = baseUrl + '/blockComments/';
const unblockCommentsEndpoint = baseUrl + '/unlockComments/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(payload: object): Observable<ServerResponse<User>> {
    return this.http.post<ServerResponse<User>>(registerEndpoint, payload);
  }

  login(payload: object): Observable<ServerResponse<User>> {
    return this.http.post<ServerResponse<User>>(loginEndpoint, payload);
  }

  getProfile(username: string): Observable<ServerResponse<User>> {
    return this.http.get<ServerResponse<User>>(profileEndpoint + username);
  }

  changeAvatar(payload: object): Observable<ServerResponse<object>> {
    return this.http.post<ServerResponse<object>>(
      changeAvatarEndpoint,
      payload
    );
  }

  blockComments(id: string): Observable<ServerResponse<object>> {
    return this.http.post<ServerResponse<object>>(
      blockCommentsEndpoint + id,
      {}
    );
  }

  unblockComments(id: string): Observable<ServerResponse<object>> {
    return this.http.post<ServerResponse<object>>(
      unblockCommentsEndpoint + id,
      {}
    );
  }
}
