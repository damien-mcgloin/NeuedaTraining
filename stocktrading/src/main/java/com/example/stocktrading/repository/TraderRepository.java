package com.example.stocktrading.repository;

import com.example.stocktrading.service.TradingService;
import com.example.stocktrading.entity.StockTrading;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface TraderRepository extends JpaRepository<StockTrading, Integer>{

   // List<StockTrading> findStockByStockticker(String stockTicker);
}
