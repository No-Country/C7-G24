package com.bdabalcarce.demo.repository;

import com.bdabalcarce.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository <User, Integer> {
}
