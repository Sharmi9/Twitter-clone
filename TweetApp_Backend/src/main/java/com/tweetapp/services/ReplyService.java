package com.tweetapp.services;

import com.tweetapp.entities.Reply;
import com.tweetapp.entities.Tweet;
import com.tweetapp.entities.User;
import com.tweetapp.repositories.ReplyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReplyService {
    @Autowired
    ReplyRepository replyRepository;


    public Iterable<Reply> getAllReplies(){
        return replyRepository.findAll();
    }

    public void addNewReply(Reply reply){
        replyRepository.save(reply);
    }

    public Optional<Reply> getRepliesForTweet(Integer tweetId){

        return replyRepository.findByTweetId(tweetId);
    }
}
