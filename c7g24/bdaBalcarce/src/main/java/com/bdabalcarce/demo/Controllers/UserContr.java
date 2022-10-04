package com.bdabalcarce.demo.Controllers;


import com.bdabalcarce.demo.Dto.UserDto;
import com.bdabalcarce.demo.Entities.Message;
import com.bdabalcarce.demo.Entities.User;
import com.bdabalcarce.demo.Services.UserServ;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController

@RequestMapping({"/users"})
public class UserContr {
    @Autowired
    UserServ userServ;

    @GetMapping ("/list")
    public ResponseEntity<List<User>> list() {
        List<User> list = userServ.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody UserDto dtousuario) {
        if (StringUtils.isBlank(dtousuario.getUserName()) ||
                StringUtils.isBlank(dtousuario.getUserLastname()) ||
                StringUtils.isBlank(dtousuario.getUserDni())){

            return new ResponseEntity(new Message("Campos obligatorios: Nombre, Apellidoy Dni"),HttpStatus.BAD_REQUEST);
        }

        User usuario = new User(
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
