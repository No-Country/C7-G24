package com.bdabalcarce.demo.Repositories;

import com.bdabalcarce.demo.Entities.users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface userRepo extends JpaRepository <users, Integer> {
}
