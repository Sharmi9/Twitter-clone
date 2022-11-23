package com.tweetapp.controllers;

import com.tweetapp.entities.Reply;
import com.tweetapp.entities.User;
import com.tweetapp.services.ReplyService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1.0")
public class ReplyController {
    @Autowired
    ReplyService replyService;

    @PostMapping("/tweets/reply")
    void addNewReply(@RequestBody Reply reply) {
        replyService.addNewReply(reply);
    }

    @GetMapping("/tweets/allReplies")
    @ApiOperation(value = "Find all Replies", notes = "Hit this end-point for getting all replies from db")
    Iterable<Reply> getAllUsers() {
        return replyService.getAllReplies();
    }

}
