import { Component, Input, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { Stocktrading } from '../shared/stocktrading';
import { ActivatedRoute, Router } from '@angular/router';
import { identifierName } from '@angular/compiler';


@Component({
  selector: 'app-stui-sell',
  templateUrl: './stui-sell.component.html',
  styleUrls: ['./stui-sell.component.css']
})
export class STUISellComponent implements OnInit {

  @Input() StockDetails = {id: 0, stockTicker: '', price: 0, volume: 0,
          buyOrSell: '', status: 0, date: '' }

  id = this.actRoute.snapshot.params['id'];
  Stocktradings: any = [];

  constructor(
    public restAPi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loadStocktradings()
  }

  createstocktosell() {
    this.restAPi.createStocktrading(this.StockDetails).subscribe((data: {}) => {
      this.router.navigate(['/stui-list'])
    })
  }

  sellstock() {
    if(window.confirm('Are you sure, you want to sell?')){
    this.restAPi.updateStocktrading(this.StockDetails.id, this.StockDetails).subscribe((data: {}) => {
      this.router.navigate(['/stui-list'])
    })
  }
  }

  loadStocktradings() {
    return this.restAPi.getStocktradings().subscribe((data: {}) => {
      this.Stocktradings = data;
    })
  }



}


