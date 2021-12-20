package com.coforge.training.airline.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "booktickets")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookTickets 
{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long bookid;
	
	private long flightid;
	
	private long userid;
	
	private String ticketpaymentmethod;
	
	private int totalnoofseats;
	
	private String bookingdate;
	
	private String bookingtime;
	
	@OneToOne(targetEntity = BookTickets.class,cascade = CascadeType.ALL)
	@JoinColumn(name = "FR_PS")
	private PaymentStatus paymentstatus;
	
	
	@OneToMany(targetEntity = BookFlightSeatData.class, cascade = CascadeType.ALL)
	@JoinColumn(name = "FR_BS")
	private List<BookFlightSeatData> bookseats;
	
}
