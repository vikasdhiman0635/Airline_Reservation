package com.coforge.training.airline.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.coforge.training.airline.model.User;

public interface UserRepo extends JpaRepository<User, Long>{

}
