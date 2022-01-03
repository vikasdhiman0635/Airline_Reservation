package com.coforge.training.airline.controller;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.Spy;
import org.springframework.ui.Model;

import com.coforge.training.airline.model.FlightCompany;
import com.coforge.training.airline.repository.FlightCompanyRepo;
import com.coforge.training.airline.service.FlightCompanyService;

class FlightCompanyControllerTest {
	
	FlightCompanyController c1= new FlightCompanyController();

	@Mock
	private FlightCompanyService fService;

	@Mock
	private FlightCompanyRepo fRepo;


	@Spy
	private Model model;

	@Spy
	List<FlightCompany> fCompany = new ArrayList<FlightCompany>();

	@Spy
	HttpServletRequest req;

	@Spy
	HttpSession ses;

	@BeforeEach
	public void init() {
		MockitoAnnotations.openMocks(this);
		fCompany=getCompanyList();
	}
	
	private List<FlightCompany> getCompanyList() {
		FlightCompany f1= new FlightCompany();
		f1.setCompanyid(1);
		f1.setCompanyname("Airline");
		f1.setCountry("India");
		f1.setCode("Abc123");
		List<FlightCompany> res=new ArrayList<FlightCompany>();
		res.add(f1);
		return res;
	}



	@Test
	void testSave() {
		fail("Not yet implemented");
	}

	@Test
	void testGetAllCompany() {
		fail("Not yet implemented");
	}

	@Test
	void testGetCompanyById() {
		fail("Not yet implemented");
	}

	@Test
	void testGetCompanyByCompany() {
		fail("Not yet implemented");
	}

	@Test
	void testGetCompanyByCountry() {
		fail("Not yet implemented");
	}

	@Test
	void testGetFlightByCountryCode() {
		fail("Not yet implemented");
	}

	@Test
	void testDeleteMapping() {
		fail("Not yet implemented");
	}

	@Test
	void testUpdatecompany() {
		fail("Not yet implemented");
	}
	
}
