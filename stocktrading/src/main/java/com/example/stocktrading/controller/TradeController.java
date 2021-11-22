package com.example.stocktrading.controller;

import com.example.stocktrading.entity.StockTrading;
import com.example.stocktrading.service.TradingService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/Trader")
public class TradeController {
    private static final Logger LOG = LoggerFactory.getLogger(TradeController.class);

    @Autowired
    private TradingService tradingservice;

    @GetMapping
    public List<StockTrading> findAll(){
        return tradingservice.findAll();
    }


    @GetMapping("/{id}")
    public ResponseEntity<StockTrading> findById(@PathVariable int id){
        try {
            return new ResponseEntity<StockTrading>(tradingservice.findById(id), HttpStatus.OK);
        } catch (NoSuchElementException ex)
        {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<StockTrading> updateById(@RequestBody StockTrading stockTrading)  {
        try {
            return new ResponseEntity<StockTrading>(tradingservice.save(stockTrading), HttpStatus.OK);
        } catch (Exception ex)
        {
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping
    public ResponseEntity<StockTrading> create(@RequestBody StockTrading stockTrading)
    {
        return new ResponseEntity<StockTrading>(tradingservice.save(stockTrading), HttpStatus.CREATED);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable int id)
    {
        try {
            tradingservice.delete(id);

        } catch(EmptyResultDataAccessException ex) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    /*
    @GetMapping("/buyOrSell")
    public ResponseEntity findByTrade(@PathVariable String BuyOrSell)
    {
        try {
            return new ResponseEntity<StockTrading>(tradingservice.findByTrade(BuyOrSell), HttpStatus.OK);

        }
    }
     */



}
