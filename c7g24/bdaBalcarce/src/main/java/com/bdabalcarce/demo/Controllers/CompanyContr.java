package com.bdabalcarce.demo.Controllers;

import com.bdabalcarce.demo.Dto.CompanyDto;
import com.bdabalcarce.demo.Dto.UserDto;
import com.bdabalcarce.demo.Entities.Company;
import com.bdabalcarce.demo.Entities.Message;
import com.bdabalcarce.demo.Entities.Users;
import com.bdabalcarce.demo.Services.CompanyServ;
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
    CompanyServ coServ;

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
