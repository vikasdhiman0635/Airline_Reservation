package com.echo.user.echo_user.Controller;

import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class Token {

    // http://localhost:8090/csrf-token
    // If your want to add some data or delete using POST/PUT/DELETE or any other you need to create 
    // a CSRF token and put this token into your headers with field name is X-CSRF-TOEKN
    @GetMapping("/csrf-token")
    public CsrfToken getMethodName(HttpServletRequest request) {
        return (CsrfToken) request.getAttribute("_csrf");
    }

}
