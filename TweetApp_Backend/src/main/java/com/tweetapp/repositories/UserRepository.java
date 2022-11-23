package com.tweetapp.repositories;

import com.tweetapp.entities.User;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User,Integer> {
    Optional<User> findByUserName(String user_name);

    @Query(nativeQuery = true,value = "select user_id from user u where u.user_name = :user_name")
    Integer findUserIdByUserName(String user_name);

    @Modifying
    @Transactional
    @Query(nativeQuery = true,value = "update user set password = :password where user_name = :user_name")
    void updatePassword(String password,String user_name);

}
