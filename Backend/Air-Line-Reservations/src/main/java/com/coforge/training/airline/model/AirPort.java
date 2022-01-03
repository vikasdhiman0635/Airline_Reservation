package com.coforge.training.airline.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "airport")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AirPort {

	@Id
	private long airportid;
	
	private String airportname;
	
	private String airportcountry;
	
	private String airportcity;
	
	private String airportpincode;
	
	private String airportphoneno;
	
	private String adminemail;
	
}
