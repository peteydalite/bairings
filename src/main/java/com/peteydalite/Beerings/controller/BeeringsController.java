package com.peteydalite.Beerings.controller;

import com.peteydalite.Beerings.dao.PunkDAO;
import com.peteydalite.Beerings.model.Punk;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Component
@RestController
@RequestMapping(path = "/beerings")
public class BeeringsController {


    @Autowired
    private PunkDAO dao;

    @RequestMapping(path="/test", method = RequestMethod.GET)
    public void test(){
        System.out.println("It's working");

    }

    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public Punk[] getByID(@Valid @PathVariable int id){
        return dao.getBeerById(id);
    }

    @RequestMapping(path = "/food", method = RequestMethod.GET)
    public Punk[] getBeersByFoods(@Valid @RequestParam(value = "foods", defaultValue = " ") String foods){
        return dao.getBeersByFoods(foods);
    }
}
