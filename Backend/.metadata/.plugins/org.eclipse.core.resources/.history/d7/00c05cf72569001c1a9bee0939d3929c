package com.coforge.training.airline.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coforge.training.airline.model.AdminContent;
import com.coforge.training.airline.service.AdminContentService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/admincontent")
public class AdminContentController {

	@Autowired
	private AdminContentService service;
	
	@PostMapping()
	public ResponseEntity<AdminContent> save(@RequestBody() AdminContent admin)
	{
		AdminContent res=service.newAdmin(admin);
		return ResponseEntity.ok().body(res);
	}
	
	@GetMapping()
	public ResponseEntity<List<AdminContent>> getAllAdmin()
	{
		List<AdminContent> res=service.getAllAdmin();
		return ResponseEntity.ok().body(res);
	}
	
	@GetMapping("/{email}")
	public ResponseEntity<AdminContent> getOneAdmin(@PathVariable("email") String email)
	{
		AdminContent res=service.getOneAdmin(email);
		return ResponseEntity.ok().body(res);
	}
	
	@DeleteMapping("/{email}")
	public ResponseEntity<String> deleteMapping(@PathVariable("email") String email)
	{
		String res=service.deleteAdmin(email);
		return ResponseEntity.ok().body(res);
	}
	
}
