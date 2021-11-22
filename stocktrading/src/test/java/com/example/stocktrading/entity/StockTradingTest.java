package com.example.stocktrading.entity;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class StockTradingTest {

    private static final String stockTicker = "testStockTicker";
    private static final double price = 2222;
    private static final int volume = 5555;
    private static final String buyOrSell = "buyTest";
    private static final int statusCode = 4444;


    @BeforeEach
    public void setup(){
    this.stockTrade = new StockTrading();
    }


    // simple sanity test
    @Autowired
    private StockTrading stockTrade;

    @Test
    public void contextLoads() throws Exception {
        assertThat(stockTrade).isNotNull();
    }


    //test getters and setters
    @Test
    public void setGetStockTicker(){
    this.stockTrade.setStockTicker(stockTicker);
    assertEquals(this.stockTrade.getStockTicker(), stockTicker);
    }

    @Test
    public void setGetPrice(){
        this.stockTrade.setPrice(price);
        assertEquals(this.stockTrade.getPrice(), price);
    }

    @Test
    public void setGetVolume(){
        this.stockTrade.setVolume(volume);
        assertEquals(this.stockTrade.getVolume(), volume);
    }

    @Test
    public void setGetBuyOrSell(){
        this.stockTrade.setBuyOrSell(buyOrSell);
        assertEquals(this.stockTrade.getBuyOrSell(), buyOrSell);
    }

    @Test
    public void setGetStatusCode(){
        this.stockTrade.setStatusCode(statusCode);
        assertEquals(this.stockTrade.getStatusCode(), statusCode);
    }

}
