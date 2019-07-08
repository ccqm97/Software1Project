package model.pojos;
// Generated 8/07/2019 12:36:17 PM by Hibernate Tools 4.3.1


import java.util.HashSet;
import java.util.Set;

/**
 * Factura generated by hbm2java
 */
public class Factura  implements java.io.Serializable {


     private long idFactura;
     private Proveedor proveedor;
     private String idFacturaProveedor;
     private Set devolucions = new HashSet(0);
     private Set prouctoFacturas = new HashSet(0);

    public Factura() {
    }

	
    public Factura(long idFactura) {
        this.idFactura = idFactura;
    }
    public Factura(long idFactura, Proveedor proveedor, String idFacturaProveedor, Set devolucions, Set prouctoFacturas) {
       this.idFactura = idFactura;
       this.proveedor = proveedor;
       this.idFacturaProveedor = idFacturaProveedor;
       this.devolucions = devolucions;
       this.prouctoFacturas = prouctoFacturas;
    }
   
    public long getIdFactura() {
        return this.idFactura;
    }
    
    public void setIdFactura(long idFactura) {
        this.idFactura = idFactura;
    }
    public Proveedor getProveedor() {
        return this.proveedor;
    }
    
    public void setProveedor(Proveedor proveedor) {
        this.proveedor = proveedor;
    }
    public String getIdFacturaProveedor() {
        return this.idFacturaProveedor;
    }
    
    public void setIdFacturaProveedor(String idFacturaProveedor) {
        this.idFacturaProveedor = idFacturaProveedor;
    }
    public Set getDevolucions() {
        return this.devolucions;
    }
    
    public void setDevolucions(Set devolucions) {
        this.devolucions = devolucions;
    }
    public Set getProuctoFacturas() {
        return this.prouctoFacturas;
    }
    
    public void setProuctoFacturas(Set prouctoFacturas) {
        this.prouctoFacturas = prouctoFacturas;
    }




}


