package com.tweetapp.repositories;


import com.tweetapp.entities.Hashtag;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HashtagRepository extends CrudRepository<Hashtag,Integer> {
}
