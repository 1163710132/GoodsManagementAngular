import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import {
  MatButtonModule,
  MatCardModule, MatCommonModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule,
  MatTableDataSource,
  MatTableModule, MatTabsModule, MatToolbarModule
} from '@angular/material';
import { PanelComponent } from './component/panel/panel.component';
import { PurchaseManageComponent } from './component/purchase-manage/purchase-manage.component';
import {HttpClientModule} from '@angular/common/http';
import {FormControlDirective, FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { StockSupplyComponent } from './component/stock-supply/stock-supply.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent,
    PurchaseManageComponent,
    ToolbarComponent,
    StockSupplyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    MatCommonModule,
    MatListModule,
    MatTabsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    RouterModule,
    MatMenuModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
