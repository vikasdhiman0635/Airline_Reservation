package com.coforge.training.airline.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coforge.training.airline.model.User;
import com.coforge.training.airline.response.UpdateUserResponse;
import com.coforge.training.airline.service.UpdateUserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user/update")
public class UpdateUserController {

	@Autowired
	private UpdateUserService service;
	
	
//	Update User After user can login and signup
//	URL -> http://localhost:8090/user/update/39
//	{
//	    "userid": 39,
//	    "firstname": "Vikas",
//	    "lastname": "Dhiman",
//	    "mobileno": "0000000000",
//	    "email": "vikasdhiman835@gmail.com",
//	    "gender": "Male",
//	    "role": "Admin",
//	    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png",
//	    "joindate": "2021-12-29T12:50:14.000+00:00",
//	    "password": "dmlrYXM=",
//	    "address": {
//	        "userhouseno": 90,
//	        "userStreet": "Near Main Market",
//	        "userhometype": "home",
//	        "usercity": "Karnal",
//	        "userstate": "Haryana",
//	        "usercountry": "india",
//	        "userpincode": 898989
//	    },
//	    "passport": {
//	        "passportno": "APDJ739A",
//	        "issuedate": "12-DEC-2020",
//	        "expiredate": "31-DEV-2031"
//	    }
//	}
	@PutMapping("/{userid}")
	public ResponseEntity<UpdateUserResponse> updateUser(@PathVariable("userid") long userid, @RequestBody User user)
	{
		UpdateUserResponse res=service.updateUser(userid,user);
		return ResponseEntity.ok().body(res);
	}
	
}
