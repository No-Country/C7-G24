package com.c7g24.bdaBalcarce.service;

import com.c7g24.bdaBalcarce.entity.users;
import com.c7g24.bdaBalcarce.repository.usersR;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class usersS {
    @Autowired
    static
    usersR userRepo;

    public List<users> list() {
        return userRepo.findAll();
    }

    public static Optional<users> getOne(int id) {
        return userRepo.findById(id);
    }

    public void save(users usuario) {
        userRepo.save(usuario);
    }

    public void delete(int id) {
        userRepo.deleteById(id);
    }

    public static boolean existsById(int id){
        return userRepo.existsById(id);
    }

    public boolean existsByName(String userName){
        return userRepo.existsByName(userName);
    }
    public boolean existsByLastname(String userLastname){
        return userRepo.existsByLastname(userLastname);
    }



}
