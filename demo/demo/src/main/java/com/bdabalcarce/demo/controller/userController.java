package com.bdabalcarce.demo.controller;


import com.bdabalcarce.demo.entity.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bdabalcarce.demo.service.userS;

import java.util.List;


@RestController

@RequestMapping({"/usuarios"})
public class userController {
    @Autowired
    userS userServ;

    @GetMapping ("/listar")
    public ResponseEntity<List<user>> list() {
        List<user> list = userServ.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

}
