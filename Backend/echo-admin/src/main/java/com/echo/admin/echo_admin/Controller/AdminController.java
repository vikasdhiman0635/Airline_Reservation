package com.echo.admin.echo_admin.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.echo.admin.echo_admin.Service.AdminService;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService service;

    @GetMapping("/validAdmin/{adminEmail}")
    public ResponseEntity<Boolean> existsByEmail(@PathVariable("adminEmail") String adminEmail) {
        return service.validateAdmin(adminEmail);
    }

    @GetMapping("/validate/{adminEmail}")
    public boolean getMethodName(@PathVariable("adminEmail") String param) {
        return service.validate(param);
    }

}
