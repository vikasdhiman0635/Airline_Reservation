package com.coforge.training.airline.model;

import java.sql.Date;
import java.sql.Time;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.coforge.training.airline.enums.GenderEnums;
import com.coforge.training.airline.enums.providedbyEnums;
import com.coforge.training.airline.enums.rolesEnums;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "userid")
	private long userid;
	
	@Column(name = "firstname", length = 50)
	private String firstname;
	
	@Column(name = "lastname", length = 50)
	private String lastname;
	
	@Column(name = "mobileno", length = 15)
	private String mobileno;
	
	@Column(name = "email", length = 50)
	private String email;
	
	@Column(name = "gender", length = 10)
	@Enumerated(value = EnumType.STRING)
	private GenderEnums gender;
	
	@Column(name = "role", length = 10)
	@Enumerated(value = EnumType.STRING)
	private rolesEnums role;
	
	@Column(name = "providedby", length = 30)
	@Enumerated(value = EnumType.STRING)
	private providedbyEnums providedby;
	
	@Column(name = "avatar", length = 1000000)
	private String avatar;
	
	@Column(name = "completeprofile", length = 10)
	private boolean completeprofile;
	
	@Column(name = "joindate")
	private Date joindate;
	
	@Column(name = "jointime")
	private Time jointime;
	
	@Column(name = "password", length = 20, nullable = false)
	private String password;

	@OneToOne(mappedBy="user",cascade = CascadeType.ALL)
	@JoinColumn(name = "userid")
	private Address address;
	
	@OneToOne(mappedBy = "user",cascade = CascadeType.ALL)
	@JoinColumn(name = "userid")
	private Passport passport;
	
}
