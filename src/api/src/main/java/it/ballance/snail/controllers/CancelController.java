package it.ballance.snail.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
public class CancelController {

    @GetMapping("/cancel")
    public String Cancel() {
        return "Hello from cancel at " + LocalDateTime.now() + "!";
    }
}
