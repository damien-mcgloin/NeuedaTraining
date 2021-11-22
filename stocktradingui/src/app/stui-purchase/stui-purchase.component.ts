import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-stui-purchase',
  templateUrl: './stui-purchase.component.html',
  styleUrls: ['./stui-purchase.component.css']
})
export class STUIPurchaseComponent implements OnInit {

  @Input() StockDetails = {id: 0, stockTicker: '', price: 0, volume: 0,
          buyOrSell: 'BUY', status: 0, date: '' }
  constructor(
    public restAPi: RestApiService,
    public router: Router
  ) { }


  ngOnInit(): void {
  }


  purchaseStock(){

   this.restAPi.createStocktrading(this.StockDetails).subscribe((data: {}) => {
     this.router.navigate(['/stui-user-order-status'])
   })

  }

  loadStockPrice(){
    this.StockDetails.stockTicker

  }

}
