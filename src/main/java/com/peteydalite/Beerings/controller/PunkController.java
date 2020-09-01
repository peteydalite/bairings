package com.peteydalite.Beerings.controller;

import com.peteydalite.Beerings.dao.PunkDAO;
import com.peteydalite.Beerings.model.Punk;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Component
public class PunkController implements PunkDAO {

    private static String BASE_URL = "https://api.punkapi.com/v2/beers/";
    private RestTemplate rest = new RestTemplate();


    @Override
    public Punk[] getBeerById(int id) {
        Punk[] beers = rest.getForObject(BASE_URL + id, Punk[].class);
        return beers;
    }

    @Override
    public List<Punk> getList() {
        return null;
    }

    @Override
    public Punk[] getBeersByFoods(String food) {
        String[] separatedFoods = food.split("\\s+|,");
        System.out.println(Arrays.asList(separatedFoods).toString());
        Punk[] beers = rest.getForObject(BASE_URL + "?food="+ String.join("_", separatedFoods), Punk[].class);

        return beers;
    }
}
