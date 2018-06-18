package com.example.usersapi.repositories;

import com.example.usersapi.models.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {

}