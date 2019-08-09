/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * @author Viviana
 */
@Entity
@Table(name = "proveedor_producto")
public class ProductoProveedor implements Serializable {
    
    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_producto")
    @JsonIgnore    
    private Producto producto;
    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "nit_proveedor")
    private Proveedor proveedor;
    @Column
    private int precioProveedor;

    public ProductoProveedor() {
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public Proveedor getProveedor() {
        return proveedor;
    }

    public void setProveedor(Proveedor proveedor) {
        this.proveedor = proveedor;
    }

    public int getPrecioProveedor() {
        return precioProveedor;
    }

    public void setPrecioProveedor(int precioProveedor) {
        this.precioProveedor = precioProveedor;
    }
    
}
