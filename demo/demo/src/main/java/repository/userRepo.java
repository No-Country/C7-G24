package repository;

import entity.user;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepo extends JpaRepository <user, Integer> {
}
