package com.bdabalcarce.demo.controller;


import com.bdabalcarce.demo.Dto.CompanyDto;
import com.bdabalcarce.demo.entity.Message;
import com.bdabalcarce.demo.entity.Company;
import com.bdabalcarce.demo.service.CompanyS;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@RequestMapping({"/companies"})
public class CompanyContr {
    @Autowired
    CompanyS coServ;

    @GetMapping("/list")
    public ResponseEntity<List<Company>> list() {
        List<Company> list = coServ.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody CompanyDto coDto) {
        if (StringUtils.isBlank(coDto.getCoName()) ||
                StringUtils.isBlank(coDto.getCoCategory()) ||
                StringUtils.isBlank(coDto.getCoCuit())  ||
                StringUtils.isBlank(coDto.getCoEmail())  ||
                StringUtils.isBlank(coDto.getCoPhone())  ||
                StringUtils.isBlank(coDto.getCoAddress())  ||
                StringUtils.isBlank(coDto.getCoContactNm()) ||
                StringUtils.isBlank(coDto.getCoContactLn())  ){

            /*Si no se ingresan los campos coName, coCategory, coCuit, coEmail, coPhone, coAddress, coContactNm y
                coContactLn, se reportará un BAD_REQUEST en consola con el siguiente msj y la info no se registrará*/

            return new ResponseEntity(new Message("Campos obligatorios: coName, coCategory, coCuit, coEmail, coPhone, coAddress, coContactNm y coContactLn"),
                    HttpStatus.BAD_REQUEST);
        }

        Company empresa = new Company(
                coDto.getCoName(),
                coDto.getCoCategory(),
                coDto.getCoCuit(),
                coDto.getCoEmail(),
                coDto.getCoPhone(),
                coDto.getCoAddress(),
                coDto.getCoContactNm(),
                coDto.getCoContactLn());

        coServ.save(empresa);

        return new ResponseEntity(new Message("Información guardada"),HttpStatus.OK);
    }


}