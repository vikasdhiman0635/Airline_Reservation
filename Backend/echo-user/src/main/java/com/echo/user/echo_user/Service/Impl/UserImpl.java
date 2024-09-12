package com.echo.user.echo_user.Service.Impl;

import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.List;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.echo.user.echo_user.Repository.UserRepo;
import com.echo.user.echo_user.Request.VerifyUserCrenditials;
import com.echo.user.echo_user.Response.LoginUserResponse;
import com.echo.user.echo_user.Response.RegisterNewUser;
import com.echo.user.echo_user.Response.UpdateUserPasswordResponse;
import com.echo.user.echo_user.Service.UserService;
import com.echo.user.echo_user.entity.User;
import com.echo.user.echo_user.enums.RolesEnums;
import com.echo.user.echo_user.feign.AdminClient;

@Service
public class UserImpl implements UserService {

    @Autowired
    private UserRepo repo;

    @Autowired
    AdminClient adminService;

    @Override
    public RegisterNewUser registerNewUser(User newUser) {
        RegisterNewUser res = new RegisterNewUser();

        if (!repo.existsByEmail(newUser.getEmail())) {
            boolean response = false;
            try {
                response = adminService.existsByEmail(newUser.getEmail()).getBody();
            } catch (Exception e) {
                System.out.println(
                        "User is not found in Admin database so this user is a NORMAL_USER: " + newUser.getEmail());
                e.printStackTrace();
            }
            if (response) {

                newUser.setRole(RolesEnums.Admin);
                newUser.setJoindate(new Date());
                newUser.setAvatar(
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png");
                newUser.setCompleteprofile(false);

                String password = newUser.getPassword();
                String encpass = encryptedPassword(password);
                newUser.setPassword(encpass);

                User saveuser = repo.save(newUser);
                res.setMessage("User is Register");
                res.setEmail(newUser.getEmail());
                res.setUser(saveuser);
            }
            if (!response) {
                newUser.setRole(RolesEnums.Normal_User);
                newUser.setJoindate(new Date());
                newUser.setAvatar(
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png");
                newUser.setCompleteprofile(false);

                String password = newUser.getPassword();
                String encpass = encryptedPassword(password);
                newUser.setPassword(encpass);

                User saveuser = repo.save(newUser);
                res.setMessage("User is Register");
                res.setEmail(newUser.getEmail());
                res.setUser(saveuser);
            }
        } else {
            res.setMessage("User is Already Exist");
            res.setEmail(newUser.getEmail());
        }
        return res;
    }

    @Override
    public LoginUserResponse loginUser(User user) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'loginUser'");
    }

    @Override
    public User getUserById(long userid) {
        return repo.findById(userid).get();
    }

    @Override
    public User getUserByEmail(String email) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getUserByEmail'");
    }

    @Override
    public List<User> getAllUser() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllUser'");
    }

    @Override
    public boolean verifyEmail(String email) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'verifyEmail'");
    }

    @Override
    public boolean verifyUserdata(VerifyUserCrenditials verifydata) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'verifyUserdata'");
    }

    @Override
    public UpdateUserPasswordResponse updatePassword(String email, User updateduser) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updatePassword'");
    }

    public String encryptedPassword(String password) {
        Base64.Encoder encoder = Base64.getEncoder();
        String normalString = password;
        String encodedString = encoder.encodeToString(
                normalString.getBytes(StandardCharsets.UTF_8));
        return encodedString;
    }

}
