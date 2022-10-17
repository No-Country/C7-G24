package com.bdabalcarce.demo.controller;
import com.bdabalcarce.demo.Dto.UserDto;
import com.bdabalcarce.demo.entity.Message;
import com.bdabalcarce.demo.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.bdabalcarce.demo.service.UserS;

import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping({"/users"})
public class UserContr {
    @Autowired
    UserS userServ;
    @GetMapping ("/list")
    public ResponseEntity  list() {
        List<User> list = userServ.list();
        return new ResponseEntity (list, HttpStatus.OK);
    }
    @GetMapping("/detail/{id}")
    public ResponseEntity<User> getById(@PathVariable("id") int id) {
        if (!userServ.existById(id)) {
            return new ResponseEntity(new Message("No existe"), HttpStatus.NOT_FOUND);
        }
        User persona = userServ.getOne(id).get();
        return new ResponseEntity(persona, HttpStatus.OK);
    }
    @PostMapping("/create")

    public ResponseEntity<?> create(@RequestBody UserDto dtousuario) {

        User usuario = new User(
                dtousuario.getUserdni(),
                dtousuario.getUserrol(),
                dtousuario.getUsername(),
                dtousuario.getUserlastname(),
                dtousuario.getUseremail()
        );
        userServ.save(usuario);
        return new ResponseEntity(new Message("Información guardada"),HttpStatus.OK);
    }
}
