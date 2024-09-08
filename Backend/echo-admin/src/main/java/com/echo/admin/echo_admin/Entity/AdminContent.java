package com.echo.admin.echo_admin.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "alladmin")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdminContent {

	@Id
	private String adminemail;

}
