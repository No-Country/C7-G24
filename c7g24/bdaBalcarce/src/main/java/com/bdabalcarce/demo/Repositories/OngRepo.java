package com.bdabalcarce.demo.Repositories;

import com.bdabalcarce.demo.Entities.Ong;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OngRepo extends JpaRepository <Ong, Integer> {
}
