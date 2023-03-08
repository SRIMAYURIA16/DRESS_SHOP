package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Dress{
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	private String dressName;
	private int quantity;
	private int dressSize;
	private String address;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDressName() {
		return dressName;
	}
	public void setDressName(String dressName) {
		this.dressName = dressName;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getDressSize() {
		return dressSize;
	}
	public void setDressSize(int dressSize) {
		this.dressSize = dressSize;
	}
	
	
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Dress() {
		super();
	}
	
	
	public Dress(int id, String dressName, int quantity, int dressSize, String address) {
		super();
		this.id = id;
		this.dressName = dressName;
		this.quantity = quantity;
		this.dressSize = dressSize;
		this.address = address;
	}
	@Override
	public String toString() {
		return "Dress [id=" + id + ", dressName=" + dressName + ", quantity=" + quantity + ", dressSize=" + dressSize
				+ ", Address=" + address + "]";
	}

	
	
	
}