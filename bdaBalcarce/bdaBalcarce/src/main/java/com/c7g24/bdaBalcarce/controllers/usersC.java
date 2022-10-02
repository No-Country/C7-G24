package com.c7g24.bdaBalcarce.controllers;

import com.c7g24.bdaBalcarce.dtos.usersDto;

import com.c7g24.bdaBalcarce.entity.users;
import com.c7g24.bdaBalcarce.service.usersS;
import com.mysql.cj.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class usersC {
    @Autowired
    usersS userServ;

    @GetMapping("/list")
    public ResponseEntity<List<users>> list(){
        List<users> list = userServ.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody usersDto dtopersona) {
        if (StringUtils.isNullOrEmpty(dtopersona.getUserName())) {
            return new ResponseEntity(new Mensaje("Es obligatorio ingresar un campo"), HttpStatus.BAD_REQUEST);
        }

        users User = new users(dtopersona.getUserName(),
                dtopersona.getUserLastname(),
                dtopersona.getUserDni(),
                dtopersona.getUserEmail(),
                dtopersona.getUserPhone(),
                dtopersona.getUserDireccion(),
                dtopersona.getUserVehicle(),
                dtopersona.getUserDiponibilidad());
        userServ.save(User);

        return new ResponseEntity(new Mensaje("Creación exitosa"), HttpStatus.OK);
    }



}
