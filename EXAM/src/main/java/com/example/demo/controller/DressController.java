package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Dress;
import com.example.demo.service.DressService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DressController {
	@Autowired
	DressService service;
	
	@PostMapping("/dress")
	public String create(@RequestBody Dress dress) {
		return service.addDress(dress);
	}
	
	@GetMapping("/dress/get")
	public List<Dress> get(){
		return service.getDress();
	}
	
	@GetMapping("/dress/{id}")
	public Optional<Dress> getById(@PathVariable int id){
		return service.getDressById(id);
	}
	
	@DeleteMapping("/dress/delete/{id}")
	public Boolean delete(@RequestParam int id) {
		return service.deleteDressById(id);
	}
	
	@PutMapping("/dress/put")
	public Dress update(@RequestBody Dress dress ) {
		return service.updateDressById(dress);
	}
}