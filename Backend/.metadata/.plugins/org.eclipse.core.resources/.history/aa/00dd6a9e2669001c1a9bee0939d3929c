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
	
	@PutMapping("/{userid}")
	public ResponseEntity<UpdateUserResponse> updateUser(@PathVariable("userid") long userid, @RequestBody User user)
	{
		UpdateUserResponse res=service.updateUser(userid,user);
		return ResponseEntity.ok().body(res);
	}
	
}
