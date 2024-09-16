package com.echo.user.echo_user.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class StatusChecker {
    
    @GetMapping("/status")
    public String checkStatus(HttpServletRequest request){
        return "up session ID:"+ request.getSession().getId();
    }

}
