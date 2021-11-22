package com.example.stocktrading.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc
public class TradeControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void tradeControllerFindAllSuccess() throws Exception {

        MvcResult mvcResult = this.mockMvc.perform(get("/api/v1/Trader"))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    public void tradeControllerFindAllNotFound() throws Exception {
        MvcResult mvcResult = this.mockMvc.perform(get("/api/v1/Tradr"))
                .andDo(print())
                .andExpect(status().isNotFound())
                .andReturn();
    }

}
