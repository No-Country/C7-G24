package com.bdabalcarce.demo.Services;

import com.bdabalcarce.demo.Entities.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bdabalcarce.demo.Repositories.UserRepo;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserServ {
    @Autowired
    UserRepo userR;

    public List<Users> list() {
        return userR.findAll();
    }

    public Optional<Users> getOne(int id) {
        return userR.findById(id);
    }

    public void save(Users usuario) {
        userR.save(usuario);
    }

    public void delete(int id) {
        userR.deleteById(id);
    }

    public boolean existById(int id) {
        return userR.existsById(id);
    }
}
