package com.tweetapp.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Reply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer replyId;
    private String replyText;
    private Integer tweetId;

    public Reply(Integer replyId, String replyText, Integer tweetId, Integer userId) {
        this.replyId = replyId;
        this.replyText = replyText;
        this.tweetId = tweetId;
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Reply{" +
                "replyId=" + replyId +
                ", replyText='" + replyText + '\'' +
                ", tweetId=" + tweetId +
                ", userId=" + userId +
                '}';
    }

    private Integer userId;

    public Integer getReplyId() {
        return replyId;
    }

    public void setReplyId(Integer replyId) {
        this.replyId = replyId;
    }

    public String getReplyText() {
        return replyText;
    }

    public void setReplyText(String replyText) {
        this.replyText = replyText;
    }

    public Integer getTweetId() {
        return tweetId;
    }

    public void setTweetId(Integer tweetId) {
        this.tweetId = tweetId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Reply() {
    }


}
