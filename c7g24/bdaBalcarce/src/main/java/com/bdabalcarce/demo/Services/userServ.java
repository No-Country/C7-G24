package com.bdabalcarce.demo.Services;

import com.bdabalcarce.demo.Entities.users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bdabalcarce.demo.Repositories.userRepo;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class userServ {
    @Autowired userRepo userR;

    public List<users> list() {
        return userR.findAll();
    }

    public Optional<users> getOne(int id) {
        return userR.findById(id);
    }

    public void save(users usuario) {
        userR.save(usuario);
    }

    public void delete(int id) {
        userR.deleteById(id);
    }

    public boolean existById(int id) {
        return userR.existsById(id);
    }
}
