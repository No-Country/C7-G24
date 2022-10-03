package com.bdabalcarce.demo.Repositories;

import com.bdabalcarce.demo.Entities.Ongs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OngRepo extends JpaRepository <Ongs, Integer> {
}
