package com.peteydalite.Beerings.dao;

import com.peteydalite.Beerings.model.Punk;

import java.util.List;

public interface PunkDAO {

    public Punk[] getBeerById(int id);
    public List<Punk> getList();
    public Punk[] getBeersByFoods(String food);
}
