package com.bdabalcarce.demo.Services;

import com.bdabalcarce.demo.Entities.Ong;
import com.bdabalcarce.demo.Repositories.OngRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class OngServ {

    @Autowired
    OngRepo ongR;
    public List<Ong> list() {
        return ongR.findAll();
    }

    public Optional<Ong> getOne(int id) {
        return ongR.findById(id);
    }

    public void save(Ong ong) {
        ongR.save(ong);
    }

    public void delete(int id) {
        ongR.deleteById(id);
    }

    public boolean existById(int id) {
        return ongR.existsById(id);
    }
}
