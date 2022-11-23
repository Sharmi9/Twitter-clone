package com.tweetapp;

import com.tweetapp.services.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class UserTest {
    @Autowired
    UserService userService;

    @Test
    void checkIfUserExists(String userName){

    }

//    @Test
//    void validLogin(){
//        boolean result_1 = userService.login(2,"shar");
//        boolean result_2 = userService.login(1,"sa");
//        assertEquals(true,result_1);
//        assertEquals(false,result_2);
//
//    }

}
