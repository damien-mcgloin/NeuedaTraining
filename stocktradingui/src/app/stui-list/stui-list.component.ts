import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-stui-list',
  templateUrl: './stui-list.component.html',
  styleUrls: ['./stui-list.component.css']
})
export class STUIListComponent implements OnInit {

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
