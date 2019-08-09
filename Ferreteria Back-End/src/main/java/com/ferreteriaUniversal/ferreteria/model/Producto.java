/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
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
     private long idProducto;
    @Column
     private String nombreProducto;
    @Column
     private String descripcion;
    
    @OneToMany
    @JsonIgnore
    @JoinColumn(name="id_producto")
    private List<Item> items;
    
    @OneToMany
    @JoinColumn(name="id_producto")
    private List<ProductoProveedor> productoProveedors;

    public Producto() {
        productoProveedors= new ArrayList<>();
    }
    
    public Producto(long idProducto, String nombreProducto, String descripcion, List<Item> items) {
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.descripcion = descripcion;
        this.items = items;
        productoProveedors = new ArrayList<>();

    }
   public Producto(long idProducto, String nombreProducto, String descripcion) {
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.descripcion = descripcion;
        this.items = new ArrayList<>();
        productoProveedors = new ArrayList<>();

    }

    public Producto(long idProducto, String nombreProducto, String descripcion, List<Item> items, List<ProductoProveedor> productoProveedors) {
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.descripcion = descripcion;
        this.items = items;
        this.productoProveedors = productoProveedors;
    }
   
   
    
    public long getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(long idProducto) {
        this.idProducto = idProducto;
    }


	public Producto(String codigoProducto, String nombreProducto, String descripcion) {
		this.codigoProducto = codigoProducto;
		this.nombreProducto = nombreProducto;
		this.descripcion = descripcion;
	}

	public int getIdProducto() {
		return idProducto;
	}

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    public List<ProductoProveedor> getProductoProveedors() {
        return productoProveedors;
    }

    public void setProductoProveedors(List<ProductoProveedor> productoProveedors) {
        this.productoProveedors = productoProveedors;
    } 
}
