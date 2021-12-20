package com.coforge.training.airline.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "seattype")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class seatType {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long seattypeid;
	
	private String seattypename;
	
	private String seattypecode;

}
