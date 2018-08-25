package com.prokaprint.developer.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.stream.Stream;

@Component
public class BeerCommandLineRunner implements CommandLineRunner {

    private final BeerRepository beerRepository;

    public BeerCommandLineRunner(BeerRepository beerRepositoryArg) {
        this.beerRepository = beerRepositoryArg;
    }

    @Override
    public void run(String... strings) throws Exception {
        // Top beers from https://www.beeradvocate.com/lists/top/
        Stream.of("Kentucky Brunch Brand Stout", "Good Morning", "Very Hazy", "King Julius", "Budweiser", "Coors Light", "PBR").forEach(name -> beerRepository.save(new Beer(name)) );
        beerRepository.findAll().forEach(System.out::println);
    }
}
