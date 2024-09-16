package com.echo.user.echo_user.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

//    @Autowired
//    UserDetailsService userDetailsService;
//
//    // AuthenticationProvider is a Interface when have only one method.
//    // DaoAuthenticationProvider is using for connecting with database for authentication purposes
//    // we have several classes here for authentication such as DaoAuthenticationProvider and UserDetails and much more
//    // Now I have to provide data to DaoAuthenticationProvider
//    @Bean
//    public AuthenticationProvider getAuthentication() {
//        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
//        provider.setUserDetailsService(userDetailsService);
//        provider.setPasswordEncoder(new BCryptPasswordEncoder(12));
//        return provider;
//    }

	@Bean
	public SecurityFilterChain getSecurityFilterChain(HttpSecurity http) throws Exception {

		http.csrf(customizer -> customizer.disable());
		http.authorizeHttpRequests(request -> request.anyRequest().authenticated());
		http.httpBasic(Customizer.withDefaults());
		http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

		// http.csrf(customizer -> customizer.disable())
		// .authorizeHttpRequests(request -> request
		// .requestMatchers("save")
		// .permitAll()
		// .anyRequest().authenticated())
		// .sessionManagement(session ->
		// session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

//        http.csrf(customize -> customize.disable());
//        // it will disable the CSRF token, now you can call any api without using CSRF
//        // token
//        http.authorizeHttpRequests(request -> request
//                .requestMatchers("save").permitAll()
//                .anyRequest().authenticated()
//        );
//        // it's tell you to authonticate the any request
//        http.httpBasic(Customizer.withDefaults());
//        // it's tell you, you can use default username and password to login
//        http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
//        // it's tell you, you can make your http request from statefull to stateless
//        // meaning by default your api is statefull because after login when we call API
//        // it's return only the session.
//        // Stateless means is, everytime when you call your API after login you get the
		// w session or session id.

		return http.build();
	}

//	UserDetailsService is
//	inbuild Interface
//	that provides
//	the username
//	and password for
//	login
//     InMemoryUserDetailsManager
//	is a
//
//	class there implements with
//	UserDetailsService
//     using
//	both files
//	we provide
//	the username
//	and password for
//	a login
//	process
//     This
//	method is using for
//	create users and password

	@Bean
	public UserDetailsService getUserDetaulsService() {
			UserDetails user = User.withDefaultPasswordEncoder().username("vikas").password("vikas").roles("USER")
					.build();
			System.out.println(user.getPassword());
			UserDetails admin = User.withDefaultPasswordEncoder().username("vikas1").password("vikas1").roles("ADMIN")
					.build();
			return new InMemoryUserDetailsManager(user);
		}
}
