package it.ballance.snail.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class IndexController {

        private static final String template = "Hello, %s!";
        private final AtomicLong counter = new AtomicLong();

        @GetMapping("/")
        public String greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
            return "Hello " + name + " at " + LocalDateTime.now() + "!";
        }

}
