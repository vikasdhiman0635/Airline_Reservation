package com.echo.user.echo_user.Response;

import com.echo.user.echo_user.entity.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginUserResponse {

    private String message;

    private String email;

    private boolean login;

    private User user;

}