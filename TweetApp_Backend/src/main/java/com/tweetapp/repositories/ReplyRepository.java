package com.tweetapp.repositories;

import com.tweetapp.entities.Reply;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReplyRepository extends CrudRepository<Reply,Integer> {
    Optional<Reply> findByTweetId(Integer tweetId);
}
