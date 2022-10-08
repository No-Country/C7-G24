package com.bdabalcarce.demo.Controllers;

import com.bdabalcarce.demo.Dto.CompanyDto;
import com.bdabalcarce.demo.Dto.DonationDto;
import com.bdabalcarce.demo.Dto.UserDto;
import com.bdabalcarce.demo.Entities.Company;
import com.bdabalcarce.demo.Entities.Donation;
import com.bdabalcarce.demo.Entities.Message;
import com.bdabalcarce.demo.Entities.User;
import com.bdabalcarce.demo.Services.DonationServ;
import com.bdabalcarce.demo.Services.UserServ;
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
    DonationServ donationS;
    @Autowired UserServ userS;


    @GetMapping("/list")
    public ResponseEntity<List<Donation>>list() {
        List<Donation> list = donationS.list();
        return new ResponseEntity(list, HttpStatus.OK);

    };


    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody DonationDto dtoDonation) {
        if (StringUtils.isBlank(dtoDonation.getDonCategory())) {

            return new ResponseEntity(new Message("Campos obligatorios: donCategory"), HttpStatus.BAD_REQUEST);
        }
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

        if (userdto != null) {
            user = new User(
                    userdto.getUserDni(),
                    userdto.getUserRol(),
                    userdto.getUserName(),
                    userdto.getUserLastname(),
                    userdto.getUserEmail(),
                    userdto.getUserPhone(),
                    userdto.getUserAdress(),
                    userdto.getUserVehicle(),
                    userdto.getUserAbailability());
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


