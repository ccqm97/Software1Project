package com.ferreteriaUniversal.ferreteria.model;
// Generated 8/07/2019 12:36:17 PM by Hibernate Tools 4.3.1

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.*;
import javax.persistence.Table;

/**
 * Proveedor generated@Id
 *
 * @Column private int nitProveedor;
 * @Column private String nombreProveedor;
 * @Column private String correoProveedor;
 * @Column private int telefonoProveedor; by hbm2java
 */
@Entity
@Table(name = "proveedores")
public class Proveedor implements java.io.Serializable {

    @Id
    @Column
    private long nitProveedor;
    @Column
    private String nombreProveedor;
    @Column
    private String correoProveedor;
    @Column
    private long telefonoProveedor;

    @OneToMany
    @JsonIgnore
    @JoinColumn(name = "nit_proveedor")
    private List<ProductoProveedor> productoProveedores;

    public Proveedor() {
        this.productoProveedores = new ArrayList<ProductoProveedor>();

    }

    public Proveedor(long nitProveedor) {
        this.productoProveedores = new ArrayList<ProductoProveedor>();

        this.nitProveedor = nitProveedor;
    }

    public Proveedor(long nitProveedor, String nombreProveedor, String correoProveedor, long telefonoProveedor) {
        this.productoProveedores = new ArrayList<ProductoProveedor>();
        this.nitProveedor = nitProveedor;
        this.nombreProveedor = nombreProveedor;
        this.correoProveedor = correoProveedor;
        this.telefonoProveedor = telefonoProveedor;
    }

    public Proveedor(long nitProveedor, String nombreProveedor, String correoProveedor, long telefonoProveedor, List<ProductoProveedor> productoProveedores) {
        this.nitProveedor = nitProveedor;
        this.nombreProveedor = nombreProveedor;
        this.correoProveedor = correoProveedor;
        this.telefonoProveedor = telefonoProveedor;
        this.productoProveedores = productoProveedores;
    }

    
    public String getCorreoProveedor() {
        return correoProveedor;
    }

    public long getNitProveedor() {
        return nitProveedor;
    }

    public String getNombreProveedor() {
        return nombreProveedor;
    }

    public long getTelefonoProveedor() {
        return telefonoProveedor;
    }

    public void setCorreoProveedor(String correoProveedor) {
        this.correoProveedor = correoProveedor;
    }

    public void setNitProveedor(long nitProveedor) {
        this.nitProveedor = nitProveedor;
    }

    public void setNombreProveedor(String nombreProveedor) {
        this.nombreProveedor = nombreProveedor;
    }

    public void setTelefonoProveedor(long telefonoProveedor) {
        this.telefonoProveedor = telefonoProveedor;
    }

    public List<ProductoProveedor> getProductoProveedores() {
        return productoProveedores;
    }

    public void setProductoProveedores(List<ProductoProveedor> productoProveedores) {
        this.productoProveedores = productoProveedores;
    }
}
