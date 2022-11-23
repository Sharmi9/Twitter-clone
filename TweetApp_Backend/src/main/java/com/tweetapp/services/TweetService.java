package com.tweetapp.services;

import com.tweetapp.entities.Tweet;
import com.tweetapp.entities.User;
import com.tweetapp.repositories.TweetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TweetService {
    @Autowired
    TweetRepository tweetRepository;


    public Iterable<Tweet> getAllTweets(){
        return tweetRepository.findAll();
    }


    public List<Optional<Tweet>> getAllTweetsByUserId(Integer userId) {
        return tweetRepository.findByUserId(userId);
    }

    public List<Optional<Tweet>> getAllTweetsByUserName(String name){
        Integer id = tweetRepository.findUserIdByUserName(name);
        return tweetRepository.findByUserId(id);
    }

    public void postTweet(Tweet tweet,String name){
        Integer id = tweetRepository.findUserIdByUserName(name);
        tweet.setUser(new User(id));
        tweet.setLikes(0);
        tweetRepository.save(tweet);
    }


    public void updateTweet(Tweet tweet,Integer tweet_id,String name){
        Integer user_id = tweetRepository.findUserIdByUserName(name);
        tweet.setUser(new User(user_id));
        tweet.setTweetId(tweet_id);
        tweetRepository.save(tweet);
    }

    public void deleteTweet(Integer id){
        tweetRepository.deleteById(id);
    }

    public void likeTweet(Integer tweetId){
        Tweet tweet=tweetRepository.findById(tweetId).get();
        Integer likes=tweet.getLikes();
        tweet.setLikes(likes+1);
        tweetRepository.save(tweet);
    }

}
