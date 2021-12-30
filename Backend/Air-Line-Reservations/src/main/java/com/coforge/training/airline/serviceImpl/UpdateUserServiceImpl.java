package com.coforge.training.airline.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.training.airline.model.User;
import com.coforge.training.airline.repository.UserRepo;
import com.coforge.training.airline.response.UpdateUserResponse;
import com.coforge.training.airline.service.UpdateUserService;

@Service
public class UpdateUserServiceImpl implements UpdateUserService{

	@Autowired
	private UserRepo repo;
	
	@Override
	public UpdateUserResponse updateUser(long userid, User user) 
	{
		UpdateUserResponse res=new UpdateUserResponse();
		
		if(repo.existsById(userid) && repo.existsByEmail(user.getEmail()))
		{
			if(user.getPassport().getPassportno()!=null)
			{
				user.setCompleteprofile(true);
				
				User updateuser=repo.save(user);
				
				res.setMessage("User is updated");
				res.setEmail(user.getEmail());
				res.setCheck(true);
				res.setUser(updateuser);	
			}
		}
		else
		{
			res.setMessage("User id is not exist");
			res.setCheck(false);
			res.setEmail(user.getEmail());
		}
		
		return res;
	}

}
