import { Component, OnInit } from '@angular/core';
import {Account} from '../../entity/account';
import {AccountApi} from '../../api/account.api';
import {AccountService} from '../../service/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(private accountApi: AccountService) {
    this.username = 'admin';
    this.password = 'password';
  }

  ngOnInit() {
  }

  login() {
    this.accountApi.login(Account.of(this.username, this.password)).forEach(uid => {
      if (uid != null) {
        alert('login success');
      } else {
        alert('login failed');
      }
    });
  }

  register() {
    this.accountApi.register(Account.of(this.username, this.password)).forEach(uid => {
      if (uid != null) {
        alert('register success');
      } else {
        alert('register failed');
      }
    });
  }
}
