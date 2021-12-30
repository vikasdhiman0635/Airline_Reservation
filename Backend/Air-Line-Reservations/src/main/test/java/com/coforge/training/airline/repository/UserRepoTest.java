package com.coforge.training.airline.repository;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Date;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.coforge.training.airline.enums.GenderEnums;
import com.coforge.training.airline.enums.rolesEnums;
import com.coforge.training.airline.model.User;

@DataJpaTest
class UserRepoTest {

	@Autowired
	private UserRepo underTest;
	
//	@BeforeAll
//	static void setUpBeforeClass() throws Exception {
//		
//	}

	@AfterEach
	void tearDown() throws Exception {
		underTest.deleteAll();
	}

	@Test
	void testExistsByEmail() {
		//given
		String email="vikasdhiman835@gmail.com";
		User user=new User();
		user.setEmail(email);
		user.setFirstname("vikas Dhiman");
		user.setGender(GenderEnums.Male);
		user.setAvatar("img");
		user.setCompleteprofile(false);
		user.setLastname("Dhiman");
		user.setJoindate(new Date());
		user.setMobileno("0000000000");
		user.setPassword("vikas");
		user.setRole(rolesEnums.Admin);
		
		underTest.save(user);
		
//		when
		boolean res=underTest.existsByEmail(email);
//		then
		assertThat(res).isTrue();
	}

//	@Test
//	void testExistsByEmailAndPassword() {
//		fail("Not yet implemented");
//	}

//	@Test
//	@Disabled
//	void testFindByEmail() {
//		fail("Not yet implemented");
//	}
//
//	@Test
//	@Disabled
//	void testExistsByEmailAndMobileno() {
//		fail("Not yet implemented");
//	}

}
