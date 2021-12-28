package com.coforge.training.airline.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.coforge.training.airline.model.FlightCompany;

@Repository
public interface FlightCompanyRepo extends JpaRepository<FlightCompany, Long>{

}
