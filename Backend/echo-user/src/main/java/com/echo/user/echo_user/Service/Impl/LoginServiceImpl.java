package com.echo.user.echo_user.Service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.echo.user.echo_user.Repository.UserRepo;
import com.echo.user.echo_user.entity.User;
import com.echo.user.echo_user.entity.UserPrinciple;

@Service
public class LoginServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepo repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = repo.findByEmail(username);

        if (user == null) {
            System.out.println("user 404 not found");
            throw new UsernameNotFoundException("user 404 not found");
        }
        return new UserPrinciple(user);
    }

}
