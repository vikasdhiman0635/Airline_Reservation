package com.echo.user.echo_user.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "passport")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Passport {
    @Id
    private String passportno;

    private String issuedate;

    private String expiredate;

    private long userid;

}
