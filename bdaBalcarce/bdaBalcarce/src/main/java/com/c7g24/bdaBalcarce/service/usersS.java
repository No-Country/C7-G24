package com.c7g24.bdaBalcarce.service;

import com.c7g24.bdaBalcarce.entity.users;
import com.c7g24.bdaBalcarce.repository.RUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class usersS {
    @Autowired
    RUser rUser;

    public List<users> list() {
        return rUser.findAll();
    }

    public Optional<users> getOne(int id) {
        return rUser.findById(id);
    }

    public void save(users usuario) {
        rUser.save(usuario);
    }

    public void delete(int id) {
        rUser.deleteById(id);
    }

    public boolean existById(int id) {
        return rUser.existsById(id);
    }
}
