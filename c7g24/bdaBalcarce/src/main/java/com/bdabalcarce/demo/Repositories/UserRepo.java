package com.bdabalcarce.demo.Repositories;

import com.bdabalcarce.demo.Entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface UserRepo extends JpaRepository <Users, Integer> {
}
