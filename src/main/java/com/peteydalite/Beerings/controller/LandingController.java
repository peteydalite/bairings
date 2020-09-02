package com.peteydalite.Beerings.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LandingController {

    @RequestMapping(path = "/Landing")
    public static String landing(){
        return "Landing";
    }
}
