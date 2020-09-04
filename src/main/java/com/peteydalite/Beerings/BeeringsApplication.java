package com.peteydalite.Beerings;

import com.peteydalite.Beerings.controller.BeeringsController;
import com.peteydalite.Beerings.controller.PunkController;
import com.peteydalite.Beerings.model.Punk;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import java.util.Scanner;

@SpringBootApplication
@ComponentScan(basePackages="com.peteydalite")
public class BeeringsApplication {
	public static void main(String[] args) {
		SpringApplication.run(BeeringsApplication.class, args);

//		Scanner scan = new Scanner(System.in);
//		PunkController beerings = new PunkController();
//		String input = "";
//
//		System.out.println();
//		System.out.println();
//		System.out.println("Got some dinner ideas but don't know what kind beer to drink with it?");
//		System.out.println("Through Brew Dog's API we can help suggest something just right for you..");
//		System.out.println();
//		System.out.println("Press Enter if you're over 21....");
//		String enter = scan.nextLine();
//		if(!enter.equals("")){
//			System.out.println();
//			System.out.println("Bye!");
//			System.exit(0);
//		}else{
//			while(true) {
//				System.out.println();
//				System.out.println("Enter in some details about your dinner. Enter Q to quit");
//				System.out.println("Example: chicken tacos");
//				input = scan.nextLine();
//				if(input.equals("Q") || input.equals("")){
//					break;
//				}else {
//					Punk[] beers = beerings.getBeersByFoods(input);
//					if(beers.length == 0){
//						System.out.println("Sorry we don't have a suggestion for that");
//					}else {
//						int count = Math.min(beers.length, 5);
//						for (int i = 0; i < count; i++) {
//							System.out.println("********************");
//							System.out.println("Beer: " + beers[i].getName());
//							System.out.println("Description: " + beers[i].getDescription());
//							System.out.println("Other meal ideas: " + beers[i].getFood_pairing()[0]);
//						}
//					}
//				}
//			}
//		}
//	scan.close();
//	System.exit(0);
	}
}
