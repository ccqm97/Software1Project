package com.ferreteriaUniversal.ferreteria.model;

import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * @author Viviana
 */
@Entity
@Table(name = "facturas")
public class Factura {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idFactura;
    @Column
    private String idFacturaProveedor; 
    @Column
    private Date fechaFactura;
    @ManyToOne()
    private Proveedor nitProveedor;
    public Factura() {
    }

    public Factura(int idFactura, String idFacturaProveedor, Date fechaFactura, Proveedor proveedor) {
        this.idFactura = idFactura;
        this.idFacturaProveedor = idFacturaProveedor;
        this.fechaFactura = fechaFactura;
        this.nitProveedor = proveedor;
    }

    public int getIdFactura() {
        return idFactura;
    }

    public void setIdFactura(int idFactura) {
        this.idFactura = idFactura;
    }

    public String getIdFacturaProveedor() {
        return idFacturaProveedor;
    }

    public void setIdFacturaProveedor(String idFacturaProveedor) {
        this.idFacturaProveedor = idFacturaProveedor;
    }

    public Date getFechaFactura() {
        return fechaFactura;
    }

    public void setFechaFactura(Date fechaFactura) {
        this.fechaFactura = fechaFactura;
    }

    public Proveedor getProveedor() {
        return nitProveedor;
    }

    public void setProveedor(Proveedor proveedor) {
        this.nitProveedor = proveedor;
    }
}