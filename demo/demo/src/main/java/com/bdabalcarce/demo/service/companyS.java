package com.bdabalcarce.demo.service;

import com.bdabalcarce.demo.entity.company;
import com.bdabalcarce.demo.repository.companyRepo;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;


@Service
@Transactional

public class companyS {

    @Autowired
    companyRepo companyR;

    public List<company> list() {
        return companyR.findAll();
    }

    public Optional<company> getOne(int id) {
        return companyR.findById(id);
    }

    public void save(company comp) {
        companyR.save(comp);
    }

    public void delete(int id) {
        companyR.deleteById(id);
    }

    public boolean existById(int id) {
        return companyR.existsById(id);
    }
}

