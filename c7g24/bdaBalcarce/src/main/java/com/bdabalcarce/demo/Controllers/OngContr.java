package com.bdabalcarce.demo.Controllers;


import com.bdabalcarce.demo.Dto.CompanyDto;
import com.bdabalcarce.demo.Dto.OngDto;
import com.bdabalcarce.demo.Entities.Company;
import com.bdabalcarce.demo.Entities.Message;
import com.bdabalcarce.demo.Entities.Ongs;
import com.bdabalcarce.demo.Services.OngServ;
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
    OngServ ongServ;

    @GetMapping("/list")
    public ResponseEntity<List<Ongs>> list() {
        List<Ongs> list = ongServ.list();
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

            return new ResponseEntity(new Message("Campos obligatorios: ongName, ongCuit, ongReason, ongHeadNm, ongHeadLn y ongAddress"),
                    HttpStatus.BAD_REQUEST);
        }

        if (StringUtils.isBlank(ongDto.getOngPhone()) &&
                StringUtils.isBlank(ongDto.getOngEmail()) ){
            return new ResponseEntity(new Message("Ingrese al menos uno de los dos campos: ongPhone o ongEmail"),
                    HttpStatus.BAD_REQUEST);
        }

        Ongs ong = new Ongs(
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
