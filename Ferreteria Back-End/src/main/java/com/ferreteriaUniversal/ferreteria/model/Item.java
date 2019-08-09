/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
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
@Table(name = "item")
public class Item implements Serializable {

    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_producto")
    @JsonIgnoreProperties({"producto","proveedor"})
    private Producto producto;
    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_factura")
    @JsonIgnore
    private Factura factura;
    @Column
    private int cantidad;
    @Column
    private int valorUnitario;

    public Item() {
    }

    public Item(Producto producto, Factura factura, int cantidad, int precioProducto) {
        this.producto = producto;
        this.factura = factura;
        this.cantidad = cantidad;
        this.valorUnitario = precioProducto;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public Factura getFactura() {
        return factura;
    }

    public void setFactura(Factura factura) {
        this.factura = factura;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public int getPrecioProducto() {
        return valorUnitario;
    }

    public void setPrecioProducto(int precioProducto) {
        this.valorUnitario = precioProducto;
    }

}
