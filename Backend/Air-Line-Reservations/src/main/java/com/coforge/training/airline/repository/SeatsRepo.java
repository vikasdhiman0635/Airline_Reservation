package com.coforge.training.airline.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.coforge.training.airline.model.Seats;

@Repository
public interface SeatsRepo extends JpaRepository<Seats, Long>{

}
