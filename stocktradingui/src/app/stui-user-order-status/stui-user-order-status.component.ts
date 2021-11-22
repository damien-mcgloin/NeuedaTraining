import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-stui-user-order-status',
  templateUrl: './stui-user-order-status.component.html',
  styleUrls: ['./stui-user-order-status.component.css']
})
export class STUIUserOrderStatusComponent implements OnInit {

  Stocktradings: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit(): void {
    this.loadStocktradings()
  }

  loadStocktradings() {
    return this.restApi.getStocktradings().subscribe((data: {}) => {
      this.Stocktradings = data;
    })
  }

}
