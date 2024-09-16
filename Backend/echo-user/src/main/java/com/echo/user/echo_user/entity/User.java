package com.echo.user.echo_user.entity;

import java.util.Date;

import com.echo.user.echo_user.enums.GenderEnums;
import com.echo.user.echo_user.enums.RolesEnums;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userid;

    private String firstname;

    private String lastname;

    private String mobileno;

    private String dob;

    private String email;

    @Enumerated(value = EnumType.STRING)
    private GenderEnums gender;

    @Enumerated(value = EnumType.STRING)
    private RolesEnums role;

    @Column(length = 100000)
    private String avatar;

    private boolean completeprofile;

    private Date joindate;

    private String password;

    @OneToOne(targetEntity = Address.class, cascade = CascadeType.ALL)
    private Address address;

    @OneToOne(targetEntity = Passport.class, cascade = CascadeType.ALL)
    private Passport passport;
    
    public User() {
		// TODO Auto-generated constructor stub
	}

	public long getUserid() {
		return userid;
	}

	public void setUserid(long userid) {
		this.userid = userid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getMobileno() {
		return mobileno;
	}

	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public GenderEnums getGender() {
		return gender;
	}

	public void setGender(GenderEnums gender) {
		this.gender = gender;
	}

	public RolesEnums getRole() {
		return role;
	}

	public void setRole(RolesEnums role) {
		this.role = role;
	}

	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	public boolean isCompleteprofile() {
		return completeprofile;
	}

	public void setCompleteprofile(boolean completeprofile) {
		this.completeprofile = completeprofile;
	}

	public Date getJoindate() {
		return joindate;
	}

	public void setJoindate(Date joindate) {
		this.joindate = joindate;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public Passport getPassport() {
		return passport;
	}

	public void setPassport(Passport passport) {
		this.passport = passport;
	}
    
    
    
    

}
