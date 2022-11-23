package com.tweetapp.controllers;

import com.tweetapp.entities.User;
import com.tweetapp.services.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1.0/tweets")
@Api(value = "User REST API", description = "Information about users ")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/register")
    @ApiOperation(value = "Register a User", notes = "Hit this end-point for registering a new user")
    void addNewUser(@RequestBody User user) {
        userService.addNewUser(user);
    }

    @GetMapping("/users/all")
    @ApiOperation(value = "Find all Users", notes = "Hit this end-point for getting all users from db")
    Iterable<User> getAllUsers() {
        return userService.getAllUsers();
    }


    @GetMapping("/login/{name}/{password}")
    @ApiOperation(value = "Login", notes = "Hit this end-point to login")
    public boolean login(@PathVariable String name, @PathVariable String password) {
        return userService.login(name, password);
    }

    @GetMapping("/user/search/{name}")
    @ApiOperation(value = "Find User details by UserName", notes = "Hit this end-point to search a user")
    Optional<User> getUserDetailsByName(@PathVariable String name) {
        return userService.getUserDetailsByName(name);
    }


    @GetMapping("/forgot/{name}/{password}/{confirmPassword}")
    @ApiOperation(value = "Forgot password", notes = "Hit this end-point to change the password")
    String updatePassword( @PathVariable String name, @PathVariable String password, @PathVariable String confirmPassword) {
        return userService.updatePassword(name,password,confirmPassword);
    }

}
