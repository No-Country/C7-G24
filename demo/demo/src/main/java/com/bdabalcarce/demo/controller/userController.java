package com.bdabalcarce.demo.controller;


import com.bdabalcarce.demo.Dto.userDto;
import com.bdabalcarce.demo.entity.Message;
import com.bdabalcarce.demo.entity.user;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import com.bdabalcarce.demo.service.userS;

import java.util.List;


@RestController

@RequestMapping({"/users"})
public class userController {
    @Autowired
    userS userServ;

    @GetMapping ("/list")
    public ResponseEntity<List<user>> list() {
        List<user> list = userServ.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody userDto dtousuario) {
        if (StringUtils.isBlank(dtousuario.getUserName()) ||
                StringUtils.isBlank(dtousuario.getUserLastname()) ||
                StringUtils.isBlank(dtousuario.getUserDni())){

            return new ResponseEntity(new Message("Campos obligatorios: Nombre, Apellidoy Dni"),HttpStatus.BAD_REQUEST);
        }

        user usuario = new user(
                dtousuario.getUserRol(),
                dtousuario.getUserName(),
                dtousuario.getUserLastname(),
                dtousuario.getUserDni(),
                dtousuario.getUserEmail(),
                dtousuario.getUserPhone(),
                dtousuario.getUserAdress(),
                dtousuario.getUserVehicle(),
                dtousuario.getUserAbailability());
        userServ.save(usuario);

        return new ResponseEntity(new Message("Información guardada"),HttpStatus.OK);
    }

}
