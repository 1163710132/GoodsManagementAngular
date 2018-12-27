import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../service/account/account.service';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  title = '商品管理系统';
  username: string;
  uid: number;
  search = '';
  searchTypes = ['商品', '库内', '架上'];
  searchType: string;

  constructor(public accountService: AccountService, public router: Router) {
    this.username = '';
    this.uid = null;
    this.searchType = this.searchTypes[0];
  }

  ngOnInit() {
    this.accountService.username().forEach(username => this.username = username);
    this.accountService.uid().forEach(uid => this.uid = uid);
  }

  doSearch(){}

}
