package com.bdabalcarce.demo.controller;


import com.bdabalcarce.demo.Dto.companyDto;
import com.bdabalcarce.demo.entity.Message;
import com.bdabalcarce.demo.entity.company;
import com.bdabalcarce.demo.service.companyS;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@RequestMapping({"/companies"})
public class companyController {
    @Autowired
    companyS coServ;

    @GetMapping("/list")
    public ResponseEntity<List<company>> list() {
        List<company> list = coServ.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody companyDto coDto) {
        if (StringUtils.isBlank(coDto.getCoName()) ||
                StringUtils.isBlank(coDto.getCoCategory()) ||
                StringUtils.isBlank(coDto.getCoCuit())  ||
                StringUtils.isBlank(coDto.getCoEmail())  ||
                StringUtils.isBlank(coDto.getCoPhone())  ||
                StringUtils.isBlank(coDto.getCoAddress())  ||
                StringUtils.isBlank(coDto.getCoContactNm()) ||
                StringUtils.isBlank(coDto.getCoContactLn())  ){

            return new ResponseEntity(new Message("Campos obligatorios: coName, coCategory, coCuit, coEmail, coPhone, coAddress, coContactNm y coContactLn"),
                    HttpStatus.BAD_REQUEST);
        }

        company empresa = new company(
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