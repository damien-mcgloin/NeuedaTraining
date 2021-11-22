import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { STUIListComponent } from './stui-list/stui-list.component';
import { STUIPurchaseComponent } from './stui-purchase/stui-purchase.component';
import { STUIFindComponent } from './stui-find/stui-find.component';
import { STUIUserOrderStatusComponent } from './stui-user-order-status/stui-user-order-status.component';
import { StuiEditComponent } from './stui-edit/stui-edit.component';
import { STUISellComponent } from './stui-sell/stui-sell.component';

@NgModule({
  declarations: [
    AppComponent,
    STUIListComponent,
    STUIPurchaseComponent,
    STUIFindComponent,
    STUIUserOrderStatusComponent,
    StuiEditComponent,
    STUISellComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
