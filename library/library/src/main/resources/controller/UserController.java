package com.example.library.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.library.entity.User;
import com.example.library.repository.UserRepository;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public String login(@RequestBody User user) {

        System.out.println("Entered Username: " + user.getUsername());
        System.out.println("Entered Password: " + user.getPassword());

        User existing = userRepository.findByUsername(user.getUsername());

        if(existing != null){
            System.out.println("DB Username: " + existing.getUsername());
            System.out.println("DB Password: " + existing.getPassword());
        }else{
            System.out.println("User not found in DB");
        }

        if(existing != null && existing.getPassword().equals(user.getPassword())){
            return "success";
        }

        return "failed";
    }
}