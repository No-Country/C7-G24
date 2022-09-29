package com.c7g24.bdaBalcarce.controllers;

import com.c7g24.bdaBalcarce.dtos.usersDto;
import org.apache.commons.lang3.StringUtils;
import com.c7g24.bdaBalcarce.entity.users;
import com.c7g24.bdaBalcarce.service.usersS;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/detail/{id}")
    public ResponseEntity<users> getById(@PathVariable ("id_user") int id_user) {
        if (!userServ.existsById(id_user)) {
            return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);
        }
        users User = userServ.getOne(id_user).get();
        return new ResponseEntity(User, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody usersDto dtopersona) {
        if (StringUtils.isBlank(dtopersona.getUserName())) {
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

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody usersDto userdto) {
        //valida si existe el id
        if (!usersS.existsById(id)) {
            return new ResponseEntity(new Mensaje("El ID no Existe"), HttpStatus.BAD_REQUEST);
        }
        //el campo no puede estar vacio
        if (StringUtils.isBlank(userdto.getUserName())) {
            return new ResponseEntity(new Mensaje("El campo es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        //si pasa validaciones recien aca actualiza el objeto
        users User = usersS.getOne(id).get();
        User.setUserName(userdto.getUserName());
        User.setUserLastname(userdto.getUserLastname());
        User.setUserDni(userdto.getUserDni());
        User.setUserEmail(userdto.getUserEmail());
        User.setUserPhone(userdto.getUserPhone());
        User.setUserVehicle(userdto.getUserVehicle());
        User.setUserDiponibilidad(userdto.getUserDiponibilidad());
        User.setUserDireccion(userdto.getUserDireccion());


        userServ.save(User);
        return new ResponseEntity(new Mensaje("Perfil actualizado"), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        //valida si existe el id
        if (!userServ.existsById(id)) {
            return new ResponseEntity(new Mensaje("El ID no Existe"), HttpStatus.BAD_REQUEST);
        }

        userServ.delete(id);

        return new ResponseEntity(new Mensaje("Perfil eliminado"), HttpStatus.OK);
    }

}
