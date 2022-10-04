package com.bdabalcarce.demo.Services;


import com.bdabalcarce.demo.Entities.User;
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

    public List<User> list() {
        return userR.findAll();
    }

    public Optional<User> getOne(String id) {
        return userR.findById(id);
    }

    public void save(User usuario) {
        userR.save(usuario);
    }

    public void delete(String id) {
        userR.deleteById(id);
    }

    public boolean existById(String id) {
        return userR.existsById(id);
    }




}
