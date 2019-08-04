package com.ferreteriaUniversal.ferreteria.model;
// Generated 8/07/2019 12:36:17 PM by Hibernate Tools 4.3.1

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * Proveedor generated@Id
    @Column
     private int nitProveedor;
    @Column
     private String nombreProveedor;
    @Column
     private String correoProveedor;
    @Column
     private int telefonoProveedor;
    by hbm2java
 */

@Entity
@Table(name = "proveedores")
public class Proveedor  implements java.io.Serializable {

    @Id
    @Column
     private int nitProveedor;
    @Column
     private String nombreProveedor;
    @Column
     private String correoProveedor;
    @Column
     private int telefonoProveedor;
   
    public Proveedor() {
    }

	
    public Proveedor(int nitProveedor) {
        this.nitProveedor = nitProveedor;
    }
    public Proveedor(int nitProveedor, String nombreProveedor, 
            String emailProveedor, int telefonoProveedor) {
       this.nitProveedor = nitProveedor;
       this.nombreProveedor = nombreProveedor;
       this.correoProveedor = emailProveedor;
       this.telefonoProveedor = telefonoProveedor;
    }

    public String getCorreoProveedor() {
        return correoProveedor;
    }

    public int getNitProveedor() {
        return nitProveedor;
    }

    public String getNombreProveedor() {
        return nombreProveedor;
    }

    public int getTelefonoProveedor() {
        return telefonoProveedor;
    }

    public void setCorreoProveedor(String correoProveedor) {
        this.correoProveedor = correoProveedor;
    }

    public void setNitProveedor(int nitProveedor) {
        this.nitProveedor = nitProveedor;
    }

    public void setNombreProveedor(String nombreProveedor) {
        this.nombreProveedor = nombreProveedor;
    }

    public void setTelefonoProveedor(int telefonoProveedor) {
        this.telefonoProveedor = telefonoProveedor;
    }
}