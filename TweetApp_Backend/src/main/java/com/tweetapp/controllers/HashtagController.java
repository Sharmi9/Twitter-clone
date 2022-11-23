package com.tweetapp.controllers;

import com.tweetapp.entities.Hashtag;
import com.tweetapp.services.HashtagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1.0")
public class HashtagController {
    @Autowired
    HashtagService hashtagService;

    @GetMapping("/tweets/hashtag/all")
    public Iterable<Hashtag> getAllHashtags(){
        return hashtagService.getAllHashtags();
    }

    @GetMapping("/tweets/hashtag/{id}")
    public Optional<Hashtag> getHashtagById(@PathVariable Integer id){
        return hashtagService.getHashtagById(id);
    }

    @PostMapping("/tweets/hashtag")
    public void addNewHashtag(@RequestBody Hashtag hashtag){
        hashtagService.addNewHashtag(hashtag);
    }
}
