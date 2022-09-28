package com.c7g24.bdaBalcarce.repository;

import com.c7g24.bdaBalcarce.entity.users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface usersR extends JpaRepository <users, Integer> {
    public Optional<users> findByName(String userName);
    public Optional<users> findByLastname(String userLastname);
    public boolean existsByName(String userName);
    public boolean existsByLastname(String userLastname);
}

