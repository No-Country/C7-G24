package com.bdabalcarce.demo.Controllers;

import com.bdabalcarce.demo.Dto.DonationDto;
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
    public ResponseEntity<List<Donation>> list() {
        List<Donation> list = donationS.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }


    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody DonationDto dtoDonation) {
        if (StringUtils.isBlank(dtoDonation.getDonCategory())){

            return new ResponseEntity(new Message("Campos obligatorios: donCategory"),HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank((CharSequence) dtoDonation.getUser()) &&
                StringUtils.isBlank((CharSequence) dtoDonation.getCompany()) ){
            return new ResponseEntity(new Message("Ingrese al menos uno de los dos campos: user(dni) o company(cuit)"),
                    HttpStatus.BAD_REQUEST);
        }
       Donation donacion = new Donation(
              dtoDonation.getDonCategory(),
               dtoDonation.getDonPerishable(),
               dtoDonation.getDonExpiration(),
               dtoDonation.getDonDetails(),
                dtoDonation.getUser(),
                dtoDonation.getCompany()
               );

        donationS.save(donacion);

        return new ResponseEntity(new Message("Información guardada"),HttpStatus.OK);
    }
}
