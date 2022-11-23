package com.tweetapp.services;

import com.tweetapp.entities.Hashtag;
import com.tweetapp.repositories.HashtagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class HashtagService {
    @Autowired
    HashtagRepository hashtagRepository;


    public Iterable<Hashtag> getAllHashtags() {
        return hashtagRepository.findAll();
    }

    //get hashtag by id
    public Optional<Hashtag> getHashtagById(Integer id) {
        return hashtagRepository.findById(id);
    }

    public void addNewHashtag(Hashtag hashtag) {
        hashtagRepository.save(hashtag);
    }

}
