package com.echo.admin.echo_admin.Repositry;

import org.springframework.data.repository.CrudRepository;

import com.echo.admin.echo_admin.Entity.AdminContent;

public interface AdminRepo extends CrudRepository<AdminContent, String> {

}
