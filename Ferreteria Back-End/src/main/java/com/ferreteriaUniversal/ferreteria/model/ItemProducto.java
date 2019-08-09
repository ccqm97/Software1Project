package com.ferreteriaUniversal.ferreteria.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "item_producto")
public class ItemProducto {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idItem;
    @Column
    private long idProducto;
    @Column
    private long idProveedor;
    @Column
    private long precioProducto;

    public ItemProducto() {
    }

    public ItemProducto(long idItem, long idProducto, long idProveedor, long precioProducto) {
        this.idItem = idItem;
        this.idProducto = idProducto;
        this.idProveedor = idProveedor;
        this.precioProducto = precioProducto;
    }

    public ItemProducto(long idProducto, long idProveedor, long precioProducto) {
        this.idProducto = idProducto;
        this.idProveedor = idProveedor;
        this.precioProducto = precioProducto;
    }

    public long getIdItem() {
        return idItem;
    }

    public void setIdItem(long idItem) {
        this.idItem = idItem;
    }

    public long getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(long idProducto) {
        this.idProducto = idProducto;
    }

    public long getIdProveedor() {
        return idProveedor;
    }

    public void setIdProveedor(long idProveedor) {
        this.idProveedor = idProveedor;
    }

    public long getPrecioProducto() {
        return precioProducto;
    }

    public void setPrecioProducto(long precioProducto) {
        this.precioProducto = precioProducto;
    }

}
