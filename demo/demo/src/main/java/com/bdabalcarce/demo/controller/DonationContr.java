package com.bdabalcarce.demo.controller;

import com.bdabalcarce.demo.Dto.CompanyDto;
import com.bdabalcarce.demo.Dto.DonationDto;

import com.bdabalcarce.demo.Dto.UserDto;
import com.bdabalcarce.demo.entity.Company;
import com.bdabalcarce.demo.entity.Donation;
import com.bdabalcarce.demo.entity.Message;

import com.bdabalcarce.demo.entity.User;
import com.bdabalcarce.demo.service.DonationS;
import com.bdabalcarce.demo.service.UserS;


import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@RequestMapping({"/donations"})
public class DonationContr {
    @Autowired
    DonationS donationS;
    @Autowired UserS userS;


    @GetMapping("/list")
    public ResponseEntity<List<Donation>>list() {
        List<Donation> list = donationS.list();


            return new ResponseEntity(list, HttpStatus.OK);

    };


    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody DonationDto dtoDonation) {
        if (StringUtils.isBlank(dtoDonation.getDonCategory())) {
            /*Si no se ingresa el campo donCategory, se reportará un BAD_REQUEST en consola
             con el siguiente msj y la info no se registrará*/
            return new ResponseEntity(new Message("Campos obligatorios: donCategory"), HttpStatus.BAD_REQUEST);
        }

        //Este condicional, Funciona para que una Donation no se pueda generar sin un dni o cuit al cual estar asociado
        if (dtoDonation.getUser() == null &&
                dtoDonation.getCompany() == null) {
            return new ResponseEntity(new Message("Ingrese al menos uno de los dos campos: user(dni) o company(cuit)"),
                    HttpStatus.BAD_REQUEST);


        }

        if (dtoDonation.getUser() != null &&
                dtoDonation.getCompany() != null) {
            return new ResponseEntity(new Message("Debe elegir un tipo de donante. no ambos"),
                    HttpStatus.BAD_REQUEST);}


            UserDto userdto = dtoDonation.getUser();
            CompanyDto companyDto = dtoDonation.getCompany();
            User user = null;
            Company company = null;
        // Si se detectan datos en user, se generará un objeto, y se asociará con su donation.
            if (userdto != null) {
                user = new User(
                        userdto.getUserDni(),
                        userdto.getUserName(),
                        userdto.getUserLastname());

        // Si se detectan datos en company, se generará un objeto de su clase, y se asociará con su donation.
            } else {

                company = new Company(
                        companyDto.getCoCuit(),
                        companyDto.getCoName(),
                        companyDto.getCoCategory(),
                        companyDto.getCoEmail(),
                        companyDto.getCoPhone(),
                        companyDto.getCoAddress(),
                        companyDto.getCoContactNm(),
                        companyDto.getCoContactLn());
            }

            Donation donacion = new Donation(
                    dtoDonation.getDonCategory(),
                    dtoDonation.getDonPerishable(),
                    dtoDonation.getDonExpiration(),
                    dtoDonation.getDonDetails(),
                    user,
                    company
            );

            donationS.save(donacion);

            return new ResponseEntity(new Message("Información guardada"), HttpStatus.OK);
        }}





