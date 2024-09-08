package com.echo.user.echo_user.Service;

import java.util.List;

import com.echo.user.echo_user.Request.VerifyUserCrenditials;
import com.echo.user.echo_user.Response.LoginUserResponse;
import com.echo.user.echo_user.Response.RegisterNewUser;
import com.echo.user.echo_user.Response.UpdateUserPasswordResponse;
import com.echo.user.echo_user.entity.User;

public interface UserService {

    RegisterNewUser registerNewUser(User user);

    LoginUserResponse loginUser(User user);

    User getUserById(long userid);

    User getUserByEmail(String email);

    List<User> getAllUser();

    boolean verifyEmail(String email);

    boolean verifyUserdata(VerifyUserCrenditials verifydata);

    UpdateUserPasswordResponse updatePassword(String email, User updateduser);

}
