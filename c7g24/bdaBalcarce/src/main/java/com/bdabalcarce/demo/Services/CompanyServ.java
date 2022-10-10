package com.bdabalcarce.demo.Services;

import com.bdabalcarce.demo.Entities.Company;
import com.bdabalcarce.demo.Repositories.CompanyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CompanyServ {
    @Autowired
    CompanyRepo companyR;

    public List<Company> list() {
        return companyR.findAll();
    }

    public Optional<Company> getOne(int id) {
        return companyR.findById(id);
    }

    public void save(Company empresa) {
        companyR.save(empresa);
    }

    public void delete(int id) {
        companyR.deleteById(id);
    }

    public boolean existById(int id) {
        return companyR.existsById(id);
    }
}
