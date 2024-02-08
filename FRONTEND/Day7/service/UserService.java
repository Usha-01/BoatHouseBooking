package com.example.boathouse.service;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.boathouse.model.Users;
import com.example.boathouse.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    UserRepository repo;
    public List<Users> getAllUser()
    {
        return repo.findAll();
    }
    @SuppressWarnings("null")
    public String addUser (Users user)
    {
        repo.save(user);
        return "User Added";
    }
  

    public Optional<Users> getById(long id) {
		return repo.findById(id);
	}
    public String deleteUser(long id) {
       if(repo.existsById(id))
       {
        repo.deleteById(id);
        return "User deleted Successfully";
       }
       else 
       {
        return "User not found";
       }
    }

}