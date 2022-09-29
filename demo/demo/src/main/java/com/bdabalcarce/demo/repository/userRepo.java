package com.bdabalcarce.demo.repository;

import com.bdabalcarce.demo.entity.user;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepo extends JpaRepository <user, Integer> {
}
