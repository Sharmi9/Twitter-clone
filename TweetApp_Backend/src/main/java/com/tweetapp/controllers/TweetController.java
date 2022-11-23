package com.tweetapp.controllers;

import com.tweetapp.entities.Tweet;
import com.tweetapp.entities.User;
import com.tweetapp.repositories.TweetRepository;
import com.tweetapp.services.TweetService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1.0/tweets")
@Api(value = "Tweet REST API", description = "Information about tweets ")
public class TweetController {
    @Autowired
    TweetService tweetService;


    //Get all tweets
    @GetMapping("/all")
    @ApiOperation(value = "Get all tweets", notes = "Hit this end-point to view all tweets")
    Iterable<Tweet> getAllTweets(){
        return tweetService.getAllTweets();
    }


    //Get all tweets by UserId
//    @GetMapping("/tweetsByUserId/{userId}")
//    @ApiOperation(value = "Get all tweets by user Id", notes = "Hit this end-point to get all tweets by user Id")
//    public List<Optional<Tweet>> getAllTweetByUserId(@PathVariable Integer userId) {
//        return tweetService.getAllTweetsByUserId(userId);
//    }


    @GetMapping("/name/{name}")
    @ApiOperation(value = "Get all tweets by user name", notes = "Hit this end-point to get all tweets of a user")
    List<Optional<Tweet>> getAllTweetsByUserName(@PathVariable String name){
        return tweetService.getAllTweetsByUserName(name);
    }

    @PostMapping("/postTweet/{name}")
    @ApiOperation(value = "Post new Tweet", notes = "Hit this end-point to post a new tweet")
    void postTweet(@RequestBody Tweet tweet, @PathVariable String name){
        tweetService.postTweet(tweet,name);
    }

    @PutMapping("/update/{tweet_id}/{name}")
    @ApiOperation(value = "Update tweet", notes = "Hit this end-point to update the tweet")
    void updateTweetByUserId(@RequestBody Tweet tweet , @PathVariable Integer tweet_id, @PathVariable String name){
        tweetService.updateTweet(tweet,tweet_id,name);
    }

    @DeleteMapping("/delete/{id}")
    @ApiOperation(value = "Delete tweet", notes = "Hit this end-point to delete the tweet")
    void deleteTweet(@PathVariable Integer id){
        tweetService.deleteTweet(id);
    }

    //like a tweet
    @PutMapping("/tweets/like/{tweetId}")
    @ApiOperation(value = "Like a tweet", notes = "Hit this end-point to like a tweet")
    public void likeTweet( @PathVariable Integer tweetId){
        tweetService.likeTweet(tweetId);
    }


}
