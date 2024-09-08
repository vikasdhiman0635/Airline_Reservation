package com.echo.user.echo_user.Response;

import com.echo.user.echo_user.entity.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterNewUser {

    private String message;

    private String email;

    private User user;

}
