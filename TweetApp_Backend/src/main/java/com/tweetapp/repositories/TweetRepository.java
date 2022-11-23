package com.tweetapp.repositories;

import com.tweetapp.entities.Tweet;
import com.tweetapp.entities.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TweetRepository extends CrudRepository<Tweet,Integer> {
    @Query(nativeQuery = true,value = "select user_id from user u where u.user_name = :user_name")
    Integer findUserIdByUserName(String user_name);
    @Query(nativeQuery = true, value = "select * from tweet t where t.user_user_id = :user_user_id")
    List<Optional<Tweet>> findByUserId(Integer user_user_id);

//    @Query(nativeQuery = true,value = "select likes from tweet t where t.tweet_id = :tweet_id")
//    Integer findLikesCount(Integer tweet_id);
//
//    Optional<Tweet> findByTweetId(Integer tweet_id);
}
