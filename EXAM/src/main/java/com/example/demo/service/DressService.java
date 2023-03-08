package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Dress;
import com.example.demo.repository.DressRepository;

@Service
public class DressService {

		@Autowired
	    DressRepository repository;
		
		public String addDress(Dress dress) {
			repository.save(dress);
			return "Added";
		}
		public List<Dress> getDress(){
			return repository.findAll();
		}
		
		public Optional<Dress> getDressById(int id){
			return repository.findById(id);
		}
		
		public Dress updateDressById(Dress dress) {
			repository.save(dress);
			return dress;
		}
		
		public Boolean deleteDressById(int id) {
			repository.deleteById(id);
			return true;
		}

	}

