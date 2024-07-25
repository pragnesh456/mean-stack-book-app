import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HelperService } from '../../../core/services/helper.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  isLoggedSub$: Subscription;
  username: string;
  isLogged: boolean;
  isAdmin: boolean;

  constructor(
    private router: Router,
    private helperService: HelperService,
  ) { }

  ngOnInit(): void {
    this.isLogged = this.helperService.isLoggedIn();
    this.isLoggedSub$ = this.helperService
      .isUserLogged
      .subscribe((data) => {
        this.isLogged = data;
      });
  }

  ngOnDestroy(): void {
    this.isLoggedSub$.unsubscribe();
  }

  isUserLogged(): boolean {
    return this.isLogged;
  }

  isUserAdmin(): boolean {
    if (!this.isAdmin) {
      this.isAdmin = this.helperService.isAdmin();
    }

    return this.isAdmin;
  }

  getUsername(): void {
    if (!this.username) {
      this.username = this.helperService.getProfile().username;
    }
  }

  logout(): void {
    this.username = undefined;
    this.isAdmin = undefined;
    this.helperService.clearSession();
    this.helperService.isUserLogged.next(false);
  }
}
