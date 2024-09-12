package com.echo.user.echo_user.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient("ECHO-ADMIN")
public interface AdminClient {

    @GetMapping("/admin/validAdmin/{adminEmail}")
    public ResponseEntity<Boolean> existsByEmail(@PathVariable("adminEmail") String adminEmail);

    @GetMapping("/admin/validate/{adminEmail}")
    public boolean getMethodName(@PathVariable("adminEmail") String param);

}