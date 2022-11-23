package com.tweetapp.entities;

import io.swagger.annotations.ApiModel;

import javax.persistence.*;

@Entity
@ApiModel(value = "Tweet DTO")
public class Tweet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer tweetId;
    private String tweetMessage;
    private Integer likes;

    public Tweet(Integer tweetId, String tweetMessage, Integer likes, String avatar, String userName, String tweetImage, User user) {
        this.tweetId = tweetId;
        this.tweetMessage = tweetMessage;
        this.likes = likes;
        this.avatar = avatar;
        this.userName = userName;
        this.tweetImage = tweetImage;
        this.user = user;
    }

    private String avatar;

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    private String userName;

    public String getTweetImage() {
        return tweetImage;
    }

    public void setTweetImage(String tweetImage) {
        this.tweetImage = tweetImage;
    }

    private String tweetImage;

    //private LocalDateTime dateTime;
//    @CreationTimestamp
//    @Column(name="timestamp", nullable = false, updatable = false, insertable = false)
//    private Timestamp timestamp;

//    @ElementCollection
//    private List<String> replies;


    @ManyToOne
    private User user;

//    @ManyToMany
//    @JoinTable(name = "tweetTags",
//            joinColumns = @JoinColumn(name = "tweetId"),
//            inverseJoinColumns = @JoinColumn(name = "hashtagId"))
//    private List<Hashtag> hashtagList = new ArrayList<>();

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Tweet() {
    }

    public Integer getTweetId() {
        return tweetId;
    }

    public void setTweetId(Integer tweetId) {
        this.tweetId = tweetId;
    }

    public String getTweetMessage() {
        return tweetMessage;
    }

    public void setTweetMessage(String tweetMessage) {
        this.tweetMessage = tweetMessage;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }


    public Tweet(Integer tweetId, String tweetMessage, Integer likes, String tweetImage, User user) {
        this.tweetId = tweetId;
        this.tweetMessage = tweetMessage;
        this.likes = likes;
        this.tweetImage = tweetImage;
        this.user=user;
        //this.hashtagList=hashtagList;
    }

    @Override
    public String toString() {
        return "Tweet{" +
                "tweetId=" + tweetId +
                ", tweetMessage='" + tweetMessage + '\'' +
                ", likes=" + likes +
                '}';
    }
}
