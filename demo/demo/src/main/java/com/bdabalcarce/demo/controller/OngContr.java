package com.bdabalcarce.demo.controller;

import com.bdabalcarce.demo.Dto.OngDto;
import com.bdabalcarce.demo.entity.Message;
import com.bdabalcarce.demo.entity.Ong;
import com.bdabalcarce.demo.service.OngS;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"ongs"})
public class OngContr {
    @Autowired
    OngS ongServ;

    @GetMapping("/list")
    public ResponseEntity<List<Ong>> list() {
        List<Ong> list = ongServ.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody OngDto ongDto) {
        if (StringUtils.isBlank(ongDto.getOngName()) ||
                StringUtils.isBlank(ongDto.getOngCuit()) ||
                StringUtils.isBlank(ongDto.getOngReason())  ||
                StringUtils.isBlank(ongDto.getOngHeadNm()) ||
                StringUtils.isBlank(ongDto.getOngHeadLn()) ||
                StringUtils.isBlank(ongDto.getOngAddress()) ){
    /*Si no se ingresan los campos ongName, ongCuit, ongReason, ongHeadNm, ongHeadLn y ongAddress,
     se reportará un BAD_REQUEST en consola con el siguiente msj y la info no se registrará*/
            return new ResponseEntity(new Message("Campos obligatorios: ongName, ongCuit, ongReason, ongHeadNm, ongHeadLn y ongAddress"),
                    HttpStatus.BAD_REQUEST);
        }

        if (StringUtils.isBlank(ongDto.getOngPhone()) &&
                StringUtils.isBlank(ongDto.getOngEmail()) ){
            return new ResponseEntity(new Message("Ingrese al menos uno de los dos campos: ongPhone o ongEmail"),
                    HttpStatus.BAD_REQUEST);
        }

        Ong ong = new Ong(
                ongDto.getOngName(),
                ongDto.getOngCuit(),
                ongDto.getOngReason(),
                ongDto.getOngHeadNm(),
                ongDto.getOngHeadLn(),
                ongDto.getOngAddress(),
                ongDto.getOngPhone(),
                ongDto.getOngEmail());

        ongServ.save(ong);

        return new ResponseEntity(new Message("Información guardada"),HttpStatus.OK);
    }
}
