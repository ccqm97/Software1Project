package com.ferreteriaUniversal.ferreteria.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@NamedQuery(name = "ItemProducto.findcode", query = "SELECT p FROM ItemProducto p WHERE p.codigoProducto = ?1")
@Table(name = "item_producto")
public class ItemProducto {
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.AUTO)        
	private int idItem;
	@Column
	private String codigoProducto;
	@Column
	private int idProveedor;
	@Column
	private int precioProducto;

	public ItemProducto() {
	}

	public ItemProducto(int idItem, String codigoProducto, int idProveedor, int precioProducto) {
		this.idItem = idItem;
		this.codigoProducto = codigoProducto;
		this.idProveedor = idProveedor;
		this.precioProducto = precioProducto;
	}
	
	public ItemProducto(String codigoProducto, int idProveedor, int precioProducto) {
		this.codigoProducto = codigoProducto;
		this.idProveedor = idProveedor;
		this.precioProducto = precioProducto;
	}

	public int getIdItem() {
		return idItem;
	}

	public void setIdItem(int idItem) {
		this.idItem = idItem;
	}

	public String getCodigoProducto() {
		return codigoProducto;
	}

	public void setCodigoProducto(String codigoProducto) {
		this.codigoProducto = codigoProducto;
	}

	public int getIdProveedor() {
		return idProveedor;
	}

	public void setIdProveedor(int idProveedor) {
		this.idProveedor = idProveedor;
	}

	public int getPrecioProducto() {
		return precioProducto;
	}

	public void setPrecioProducto(int precioProducto) {
		this.precioProducto = precioProducto;
	}
	
	

}
