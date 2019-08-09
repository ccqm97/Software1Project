/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author Viviana
 */
@Entity
@Table(name = "productos")
public class Producto {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.AUTO)        
	private int idProducto;
	@Column
	private String codigoProducto;
	@Column
	private String nombreProducto;
	@Column
	private String descripcion;

	public Producto() {
	}

	public Producto(int idProducto,String codigoProducto, String nombreProducto, String descripcion) {
		this.idProducto = idProducto;
		this.codigoProducto = codigoProducto;
		this.nombreProducto = nombreProducto;
		this.descripcion = descripcion;
	}

	public Producto(String codigoProducto, String nombreProducto, String descripcion) {
		this.codigoProducto = codigoProducto;
		this.nombreProducto = nombreProducto;
		this.descripcion = descripcion;
	}

	public int getIdProducto() {
		return idProducto;
	}

	public void setIdProducto(int idProducto) {
		this.idProducto = idProducto;
	}
	
	public String getCodigoProducto() {
		return codigoProducto;
	}

	public void setCodigoProducto(String codigoProducto) {
		this.codigoProducto = codigoProducto;
	}

	public String getNombreProducto() {
		return nombreProducto;
	}

	public void setNombreProducto(String nombreProducto) {
		this.nombreProducto = nombreProducto;
	}

	public String getDescripcion() {
		return descripcion;
	}

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

   
}
