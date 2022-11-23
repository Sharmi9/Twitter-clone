package com.tweetapp.services;

import com.tweetapp.entities.User;
import com.tweetapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;


import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;


    public void addNewUser(User user){
        userRepository.save(user);
    }

    public Iterable<User> getAllUsers(){
        return userRepository.findAll();
    }


    public boolean login(String name,String password){
        Optional<User> user = userRepository.findByUserName(name);
        if(user.isPresent())
            if(user.get().getPassword().equals(password)){
                return true;
            }
        return false;
    }

    public  Optional<User> getUserDetailsByName(String name){

        return userRepository.findByUserName(name);
    }

    public String updatePassword(String name, String password, String confirmPassword) {
        //Integer id = userRepository.findUserIdByUserName(name);

        Optional<User> user = userRepository.findByUserName(name);
        String updateMessage = null;
        if (user.isPresent()) {
            if(password.equals(confirmPassword)){
            if (user.get().getUserName().equals(name)) {
                userRepository.updatePassword(password, name);
                updateMessage = "Password updated successfully...";
            }}
            else{
                updateMessage= "Password and Confirm Password don't match...";
            }

        }else{
            updateMessage="Invalid user name...";
        }
        return updateMessage;
    }

    }

