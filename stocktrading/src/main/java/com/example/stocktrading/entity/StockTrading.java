package com.example.stocktrading.entity;

import javax.persistence.*;
import java.util.Date;

@Entity(name="stock_trading")
public class StockTrading {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Id")
    private int id;

    @Column(name="StockTicker")
    private String stockTicker;

    @Column(name="Price")
    private double price;

    @Column(name="Volume")
    private int volume;

    @Column(name="BuyOrSell")
    private String buyOrSell;

    @Column(name="StatusCode")
    private int statusCode;


    // add timestamp to data entry
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdTimeStamp = new Date(System.currentTimeMillis());


    public Date getCreatedTimeStamp() {
        return createdTimeStamp;
    }

    public void setCreatedTimeStamp(Date createdTimeStamp) {
        this.createdTimeStamp = createdTimeStamp;
    }

    @Column(name="DateTime")
    private String dateTime;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStockTicker() {
        return stockTicker;
    }

    public void setStockTicker(String stockTicker) {
        this.stockTicker = stockTicker;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getVolume() {
        return volume;
    }

    public void setVolume(int volume) {
        this.volume = volume;
    }

    public String getBuyOrSell() {
        return buyOrSell;
    }

    public void setBuyOrSell(String buyOrSell) {
        this.buyOrSell = buyOrSell;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    @Override
    public String toString() {
        return "StockTrading{" +
                "id=" + id +
                ", stockTicker='" + stockTicker + '\'' +
                ", price=" + price +
                ", volume=" + volume +
                ", buyOrSell='" + buyOrSell + '\'' +
                ", statusCode=" + statusCode +
                '}';
    }
}
