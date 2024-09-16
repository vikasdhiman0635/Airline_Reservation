package com.echo.user.echo_user.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.echo.user.echo_user.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    public boolean existsByEmail(String email);

    public User findByEmail(String username);

}
