package com.coforge.training.airline.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "seats")
public class Seats {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long seatid;
	
	private String seatType;
	
	private String totalseats;
	
}
