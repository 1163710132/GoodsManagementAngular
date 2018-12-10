import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../service/account/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  title = '商品管理系统';
  username: string;
  uid: number;
  search: string;

  constructor(public accountService: AccountService, public router: Router) {
    this.username = '';
    this.uid = null;
  }

  ngOnInit() {
    this.accountService.username().forEach(username => this.username = username);
    this.accountService.uid().forEach(uid => this.uid = uid);
  }

}
