import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { STUIListComponent} from './stui-list/stui-list.component';
import { STUIFindComponent} from './stui-find/stui-find.component';
import { STUIPurchaseComponent} from './stui-purchase/stui-purchase.component';
import { STUISellComponent} from './stui-sell/stui-sell.component';
import { STUIUserOrderStatusComponent} from './stui-user-order-status/stui-user-order-status.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'stui-list' },
  { path: 'stui-list', component: STUIListComponent},
  { path: 'stui-find', component: STUIFindComponent },
  { path: 'stui-purchase', component: STUIPurchaseComponent },
  { path: 'stui-sell', component: STUISellComponent },
  { path: 'stui-user-order-status', component: STUIUserOrderStatusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
