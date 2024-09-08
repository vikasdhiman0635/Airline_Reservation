package com.echo.admin.echo_admin.Service;

import org.springframework.http.ResponseEntity;

public interface AdminService {

    ResponseEntity<Boolean> validateAdmin(String adminEmail);

    boolean validate(String param);

}
