package service;

import entity.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.userRepo;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class userS {
    @Autowired userRepo userR;

    public List<user> list() {
        return userR.findAll();
    }

    public Optional<user> getOne(int id) {
        return userR.findById(id);
    }

    public void save(user usuario) {
        userR.save(usuario);
    }

    public void delete(int id) {
        userR.deleteById(id);
    }

    public boolean existById(int id) {
        return userR.existsById(id);
    }
}
