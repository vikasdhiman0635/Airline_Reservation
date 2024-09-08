package com.echo.user.echo_user.aop;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggingAspect {

    private static final Logger LOGGER = LoggerFactory.getLogger(LoggingAspect.class);

    // return type class-name.method-name(args) ---> 'execution(* *.*(..))'
    // @Before anotation is using when method is call before execute this method
    @Before("ececution(* com.echo.user.echo_user.UserImpl.*(..))")
    public void loggerMethod() {
        LOGGER.info("Mothod work");
    }

}
