package com.c7g24.bdaBalcarce.controllers;


import com.c7g24.bdaBalcarce.entity.users;
import com.c7g24.bdaBalcarce.service.usersS;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("users")
public class usersC {
    @Autowired
    usersS userServ;

    @GetMapping("/listar")
    public ResponseEntity<List<users>> list(){
        List<users> list = userServ.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
}
