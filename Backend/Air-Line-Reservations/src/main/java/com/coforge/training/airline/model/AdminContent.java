package com.coforge.training.airline.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "alladmin")
public class AdminContent {

	@Id
	private String adminemail;
	
}
