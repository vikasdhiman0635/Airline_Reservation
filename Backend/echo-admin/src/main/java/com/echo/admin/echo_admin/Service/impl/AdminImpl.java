package com.echo.admin.echo_admin.Service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.echo.admin.echo_admin.Repositry.AdminRepo;
import com.echo.admin.echo_admin.Service.AdminService;

@Service
public class AdminImpl implements AdminService {

    @Autowired
    private AdminRepo repo;

    @Override
    public ResponseEntity<Boolean> validateAdmin(String adminEmail) {
        if (repo.existsById(adminEmail)) {
            return ResponseEntity.ok().body(true);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(false);
        }
    }

    @Override
    public boolean validate(String param) {
        return repo.existsById(param);
    }

}
