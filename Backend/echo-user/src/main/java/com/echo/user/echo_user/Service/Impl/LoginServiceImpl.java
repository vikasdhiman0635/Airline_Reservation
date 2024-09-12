package com.echo.user.echo_user.Service.Impl;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.echo.user.echo_user.Repository.UserRepo;

public class LoginServiceImpl implements UserDetailsService {

    private UserRepo repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // UserDetails.getAuthentication
        return null;
    }

}
