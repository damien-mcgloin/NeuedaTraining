package com.example.stocktrading.service;

import com.example.stocktrading.repository.TraderRepository;
import com.example.stocktrading.entity.StockTrading;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class  TradingService {

    @Autowired
    TraderRepository traderRepository;

    public List<StockTrading> findAll() { return traderRepository.findAll(); }

    public StockTrading findById(int id) { return traderRepository.findById(id).get();}

    //public List<StockTrading> findByStockTicker(StockTrading stockTrading) { return traderRepository.findStockByStockticker(stockTrading.getStockTicker());}

    public StockTrading save(StockTrading stockTrading) { return traderRepository.save(stockTrading);}

    public void delete(int id) {
        traderRepository.deleteById(id);
    }

   /*
    public List<StockTrading> findByTrade( String BuyOrSell)
    {
        return traderRepository.findStockByTrade(BuyOrSell);
    }

    */
}
