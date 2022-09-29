package com.bdabalcarce.demo.controller;


import com.bdabalcarce.demo.Dto.userDto;
import com.bdabalcarce.demo.entity.user;
import com.mysql.cj.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
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

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody userDto dtopersona) {
        if (StringUtils.isNullOrEmpty(dtopersona.getUserName())) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

        user User = new user(dtopersona.getUserName(),
                dtopersona.getUserLastname(),
                dtopersona.getUserEmail(),
                dtopersona.getUserPhone(),
                dtopersona.getUserDireccion(),
                dtopersona.getUserVehicle(),
                dtopersona.getUserDiponibilidad());
        userServ.save(User);

        return new ResponseEntity(HttpStatus.OK);
    }

}
