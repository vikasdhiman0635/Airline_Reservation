package com.echo.user.echo_user.entity;

import java.util.Date;

import com.echo.user.echo_user.enums.GenderEnums;
import com.echo.user.echo_user.enums.RolesEnums;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long userid;

    private String firstname;

    private String lastname;

    private String mobileno;

    private String dob;

    private String email;

    @Enumerated(value = EnumType.STRING)
    private GenderEnums gender;

    @Enumerated(value = EnumType.STRING)
    private RolesEnums role;

    @Column(length = 100000)
    private String avatar;

    private boolean completeprofile;

    private Date joindate;

    private String password;

    @OneToOne(targetEntity = Address.class, cascade = CascadeType.ALL)
    private Address address;

    @OneToOne(targetEntity = Passport.class, cascade = CascadeType.ALL)
    private Passport passport;

}
