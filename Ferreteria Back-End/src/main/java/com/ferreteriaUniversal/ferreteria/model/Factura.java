package com.ferreteriaUniversal.ferreteria.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

import javax.persistence.Table;

/**
 *
 * @author Viviana
 */
@Entity
@Table(name = "facturas")
public class Factura implements Serializable {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idFactura;
    @Column
    private String idFacturaProveedor; 
    
    
    @ManyToOne
    private Proveedor nitProveedor;
    
    @OneToMany
    @JoinColumn(name="id_factura")
    private List<Item> items;
    
    public Factura() {
        this.items = new ArrayList<>();
    }

    public Factura(long idFactura, String idFacturaProveedor, Proveedor nitProveedor, List<Item> items) {
        this.idFactura = idFactura;
        this.idFacturaProveedor = idFacturaProveedor;
        this.nitProveedor = nitProveedor;
        this.items = items; 
    }

             
    public long getIdFactura() {
        return idFactura;
    }

    public void setIdFactura(long idFactura) {
        this.idFactura = idFactura;
    }

    public String getIdFacturaProveedor() {
        return idFacturaProveedor;
    }

    public void setIdFacturaProveedor(String idFacturaProveedor) {
        this.idFacturaProveedor = idFacturaProveedor;
    }

    public Proveedor getProveedor() {
        return nitProveedor;
    }

    public void setProveedor(Proveedor proveedor) {
        this.nitProveedor = proveedor;
    }

    public Proveedor getNitProveedor() {
        return nitProveedor;
    }

    public void setNitProveedor(Proveedor nitProveedor) {
        this.nitProveedor = nitProveedor;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }
}